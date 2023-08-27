import { Data } from "@angular/router";
import * as utils from "../utils";
import * as Phaser from "phaser";
import { DataStoreService } from "src/app/services/data-store.service";
import { ServiceLocator } from "src/app/services/locator.services";

export class Dial extends Phaser.GameObjects.Container {
  externalArc;
  radius = 55;
  startAngle = 180;
  endAngle = 360;
  noOfTicks = 6;
  smallTick = {
    w: 10,
    h: 6,
  };
  sprite;
  prevRad;
  steerPtr;
  rad;
  ang = this.startAngle;
  selected = 0;
  angleInterval = (this.endAngle - this.startAngle) / (this.noOfTicks - 1);
  tween;
  intervalId;
  dataStore: DataStoreService;

  constructor(scene, config) {
    super(scene, 0, 0);
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.sprite = new Phaser.GameObjects.Sprite(scene, 0, 0, "dial")
      .setOrigin(0.5, 0.48)
      .setInteractive()
      .setAngle(this.ang)
      .setScale(0.7)
      .on("pointerdown", this.onPointerDown);
    this.externalArc = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );

    this.drawTicks();

    utils.scaleToGameContainer(scene, this, this.sprite, config);
    this.add([this.sprite, this.externalArc]);
    scene.add.existing(this);
  }

  setCustomScale(factor) {
    this.setScale(this.scale*factor)
  }

  drawTicks() {
    for (let i = this.startAngle; i <= this.endAngle; i += this.angleInterval) {
      const point = this.getPointOnArc(this, this.externalArc, i);
      let rect = this.scene.add.rectangle(
        point.x,
        point.y,
        this.smallTick.w,
        this.smallTick.h,
        0xc9c9c9
      );
      rect.setOrigin(0.5, 0.5);
      rect.setAngle(i);
      rect.depth = 1;
      this.add(rect);
    }
  }

  createTwin() {
    this.tween = this.scene.add.tween({
      targets: this.sprite,
      angle: this.startAngle,
      duration: 2000,
      paused: true,
      repeat: 0,
      yoyo: false,
      ease: Phaser.Math.Easing.Linear,
      onUpdate: (val) => {
        console.log("he");
        // this.ang = val.getValue();
        // this.sprite.setAngle(this.ang);
      },
    });
    // this.tween.resume();
  }

  getPointOnArc = (container, obj, angle: number): Phaser.Math.Vector2 => {
    const radians = Phaser.Math.DegToRad(angle);
    const scale = container.scaleX;
    const x = obj.x * scale + Math.cos(radians) * obj.radius * scale;
    const y = obj.y * scale + Math.sin(radians) * obj.radius * scale;
    return new Phaser.Math.Vector2(x, y);
  };

  onPointerDown = (e) => {
    let x = this.sprite.getCenter().x;
    let y = this.sprite.getCenter().y;
    let a = this.getLocalPoint(e.worldX, e.worldY);
    this.prevRad = Phaser.Math.RadToDeg(
      Phaser.Math.Angle.Between(a.x, a.y, x, y)
    );
    this.steerPtr = e.id;
    this.scene.input.on("pointermove", this.onPointerMove, this.sprite);
    this.scene.input.on("pointerup", this.onPointerUp, this.sprite);
  };

  onPointerMove = (e) => {
    if (this.steerPtr == e.id) {
      let x = this.sprite.getCenter().x;
      let y = this.sprite.getCenter().y;
      let a = this.getLocalPoint(e.worldX, e.worldY);
      this.rad = Phaser.Math.RadToDeg(
        Phaser.Math.Angle.Between(a.x, a.y, x, y)
      );
      //This factor allows for slow rotation of the dial for large movement of gesture
      let factor = 0.3;
      if (this.prevRad < 0 && this.rad > 0) {
        this.ang -=
          Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad)) * factor;
      } else if (this.prevRad > 0 && this.rad < 0) {
        this.ang +=
          Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad)) * factor;
      } else {
        this.ang += (this.rad - this.prevRad) * factor;
      }

      if (this.ang < this.startAngle) {
        this.ang += 1;
      } else if (this.ang > this.endAngle) {
        this.ang -= 1;
      } else {
        if (
          this.ang >
          this.startAngle +
            this.selected * this.angleInterval +
            this.angleInterval / 2
        ) {
          this.selected++;
          this.dataStore.setLighting(this.selected);
          let prev = this.ang;
          this.ang = this.startAngle + this.selected * this.angleInterval;
        } else if (
          this.ang <
          this.startAngle +
            this.selected * this.angleInterval -
            this.angleInterval / 2
        ) {
          this.selected--;
          this.dataStore.setLighting(this.selected);
          let prev = this.ang;
          this.ang = this.startAngle + this.selected * this.angleInterval;
        }
        this.sprite.angle = this.ang;
      }

      this.prevRad = this.rad;
    }
  };

  onPointerUp = (e) => {
    if (this.steerPtr == e.id) {
      this.scene.input.off("pointermove");
      this.scene.input.off("pointerup");
      this.ang = this.startAngle + this.selected * this.angleInterval;
      this.sprite.angle = this.ang;
      this.steerPtr = null;
    }
  };
}
