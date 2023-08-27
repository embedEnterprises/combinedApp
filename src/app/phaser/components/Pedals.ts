import Phaser from "phaser";
import { scaleToGameW, scaleToGameZone, setPos } from "../utils";
import { ServiceLocator } from "src/app/services/locator.services";
import { WebsocketService } from "src/app/services/websocket.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs";

export default class Pedal extends Phaser.GameObjects.Mesh {
  debug;
  zone;
  ptrId;
  initialVal;
  pedalTwin;
  pedalSpeed: number = 500;
  ws: WebsocketService;
  rotateRate = 1;
  xuplim = 0.1;
  xlowlim = -1;
  value = 0;
  private valueSubject = new BehaviorSubject<number>(0);

  constructor(scene, conf) {
    super(scene, conf.x, conf.y, "break");
    this.ws = ServiceLocator.getInstance("websocketService");

    Phaser.Geom.Mesh.GenerateGridVerts({
      texture: "break",
      mesh: this,
      widthSegments: 6,
    });
    this.scene.add.existing(this);
    this.scaleToGameW(this, conf.w);
    setPos(scene, this, conf.x, conf.y);
    this.zone = this.scene.add
      .zone(
        this.x + this.displayWidth,
        this.y,
        this.displayWidth,
        this.displayHeight
      )
      .setOrigin(0)
      .setInteractive();
    scaleToGameZone(scene, this.zone, conf.zw, conf.zh);
    setPos(scene, this.zone, conf.zx, conf.zy);
    this.initialVal = this.modelRotation.x;
    this.zone.on("pointerdown", this.handlePointerDown, this);
  }

  private handlePointerDown(e) {
    this.ptrId = e.id;
    this.scene.input.on("pointermove", this.handlePointerMove, this);
    this.scene.input.on("pointerup", this.handlePointerUp, this);
  }

  private handlePointerMove(e) {
    if (this.ptrId == e.id) {
      let val = e.velocity.y * (this.rotateRate / 600);
      let ldiff = this.xlowlim - this.modelRotation.x;
      let udiff = this.xuplim - this.modelRotation.x;
      if (ldiff < val && udiff > val) {
        this.modelRotation.x += val;
        this.calculateValue();
      }
    }
  }

  private handlePointerUp(e) {
    if (this.ptrId == e.id) {
      this.scene.input.off("pointermove", this.handlePointerMove, this);
      this.scene.input.off("pointerup", this.handlePointerDown, this);
      this.ptrId == null;

      this.pedalTwin = this.scene.tweens.addCounter({
        from: this.modelRotation.x,
        to: -this.initialVal,
        duration: Math.abs(this.modelRotation.x * this.pedalSpeed),
        repeat: 0,
        ease: Phaser.Math.Easing.Quadratic.Out,
        onUpdate: (tween) => {
          let val = tween.getValue();
          this.modelRotation.x = val;
          this.calculateValue();
        },
      });
    }
  }

  public scaleToGameW(obj, per) {
    obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
    obj.scaleY = obj.scaleX;
    var q = (2.5 * Number(this.scene.sys.game.config.width)) / 915;
    obj.panZ(q);
  }

  public calculateValue() {
    //map the value of the rotation to the value of the break between 0-100
    let val = Phaser.Math.Percent(
      this.modelRotation.x,
      this.xuplim,
      this.xlowlim
    );
    if (val < 0.091) val = 0;
    if (val > 0.99) val = 1;
    this.value = val;
    this.valueSubject.next(val);
  }

  getValueObservable() {
    return this.valueSubject.asObservable();
  }

  public getValue() {
    return this.value;
  }

  public setValue(val) {
    this.value = val;
    // set value for modelrotation.x between xlowlim and xuplim
    this.modelRotation.x =
      this.xlowlim + ((this.xuplim - this.xlowlim) * val) / 100;
  }

  public isClicked() {
    return this.ptrId != null;
  }
}

export class Break extends Pedal {
  dataStore: DataStoreService;

  constructor(scene, conf) {
    super(scene, conf);
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.getValueObservable().subscribe((newValue: number) => {
      this.dataStore.setBreak(newValue);
    });
  }
}

export class Gas extends Pedal {
  dataStore: DataStoreService;

  constructor(scene, conf) {
    super(scene, conf);
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.getValueObservable().subscribe((newValue: number) => {
      this.dataStore.setGas(newValue);
    });
  }
}
