import Phaser from "phaser";
import { scaleToGameW, scaleToGameZone, setPos } from "../utils";
import { ServiceLocator } from "src/app/services/locator.services";
import { WebsocketService } from "src/app/services/websocket.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs";
import { ANALOG, DIGITAL } from "../constants";

export default class Pedal extends Phaser.GameObjects.Mesh {
  debug;
  zone;
  ptrId;
  initialVal;
  pedalTwin;
  pedalSpeed: number = 500;
  ws: WebsocketService;
  rotateRate = 4;
  xcenter = 0.0;
  xlowlim = -1;
  xuplim = 1;
  value = 0;
  private valueSubject = new BehaviorSubject<number>(0);
  private gearSubject = new BehaviorSubject<string>("D");
  mode = ANALOG;
  direction = 'UP';

  constructor(scene, conf) {
    super(scene, conf.x, conf.y, "break");
    this.mode = conf.mode;
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
    this.initialVal = this.xcenter; 
    this.zone.on("pointerdown", this.handlePointerDown, this);
  }

  private handlePointerDown(e) {
    this.ptrId = e.id;
    this.scene.input.on("pointerup", this.handlePointerUp, this);
    if (this.mode === DIGITAL) {
      this.modelRotation.x = this.xlowlim;
      this.calculateValue();
    } else {
      this.scene.input.on("pointermove", this.handlePointerMove, this);
    }
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

      if (this.mode === DIGITAL) {
        this.modelRotation.x = this.xcenter;
        this.calculateValue();
      } else {
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
  }

  public scaleToGameW(obj, per) {
    obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
    obj.scaleY = obj.scaleX;
    var q = (2.5 * Number(this.scene.sys.game.config.width)) / 915;
    obj.panZ(q);
  }

  calculateValue() {
    let val;
    if (this.modelRotation.x > this.xcenter) {
      val = Phaser.Math.Percent(
        this.modelRotation.x,
        this.xcenter,
        this.xuplim
      );
      this.direction = 'DOWN';
    } else if (this.modelRotation.x <= this.xcenter) {
      val = Phaser.Math.Percent(
        this.modelRotation.x,
        this.xcenter,
        this.xlowlim
        );
        this.direction = 'UP';
    }

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
    // set value for modelrotation.x between xlowlim and xcenter
    this.modelRotation.x =
      this.xlowlim + ((this.xcenter - this.xlowlim) * val) / 100;
  }

  public isClicked() {
    return this.ptrId != null;
  }

  getGearObservable() {
    return this.gearSubject.asObservable();
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
    this.getGearObservable().subscribe((newValue: string) => {
      this.dataStore.setGear(newValue);
    });
  }

  calculateValue() {
    super.calculateValue();
    if(this.direction == 'UP') {
      this.dataStore.setGear("D");
    } else  {
      this.dataStore.setGear("R");
    }
  }
}
