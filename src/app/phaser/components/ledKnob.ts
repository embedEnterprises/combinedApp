import * as utils from "../utils";
import * as Phaser from "phaser";

export class LedKnob extends Phaser.GameObjects.Container {
  externalArc;
  radius = 100;
  startAngle = 180;
  endAngle = 360;
  noOfTicks = 6;
  smallTick = {
    w: 10,
    h: 3,
  };
  sprite;
  prevRad;
  steerPtr;
  rad;
  ang = this.startAngle;
  selected = 0;
  angleInterval = (this.endAngle - this.startAngle) / (this.noOfTicks - 1);

  constructor(scene, x, y) {
    super(scene, x, y);
    this.externalArc = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );
    this.sprite = scene.add.sprite(0, 0, "dial");
    this.sprite
      .setOrigin(0.48, 0.48)
      .setInteractive()
      .setAngle(this.ang)
      .on("pointerdown", this.onPointerDown)
      .scene.add.existing(this);
    this.add([this.externalArc, this.sprite]);
    this.setScale(1);
    this.externalArc.setStrokeStyle(7, 0xa2a2a2, 1);
    this.drawTicks();
    scene.add.existing(this);
  }

  drawTicks() {
    for (let i = this.startAngle; i <= this.endAngle; i += this.angleInterval) {
      const point = utils.getPointOnArc(this, this.externalArc, i);
      let rect = this.scene.add.rectangle(
        point.x,
        point.y,
        this.smallTick.w,
        this.smallTick.h,
        0xdd7f00
      );
      rect.setOrigin(0.5, 0.5);
      rect.setAngle(i);
      rect.depth = 1;
    }
  }

  onPointerDown = (e) => {
    let x = this.sprite.getCenter().x;
    let y = this.sprite.getCenter().y;
    let a = this.getLocalPoint(e.worldX, e.worldY);
    this.prevRad = Phaser.Math.RadToDeg(
      Phaser.Math.Angle.Between(a.x, a.y, x, y)
    );
    this.steerPtr = e.id;
    this.scene.input.on("pointermove", this.onPointerMove, this);
    this.scene.input.on("pointerup", this.onPointerUp, this);
  };

  onPointerMove = (e) => {
    if (this.steerPtr == e.id) {
      let x = this.sprite.getCenter().x;
      let y = this.sprite.getCenter().y;
      let a = this.getLocalPoint(e.worldX, e.worldY);
      this.rad = Phaser.Math.RadToDeg(
        Phaser.Math.Angle.Between(a.x, a.y, x, y)
      );
      if (this.prevRad < 0 && this.rad > 0) {
        this.ang -= Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else if (this.prevRad > 0 && this.rad < 0) {
        this.ang += Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else {
        this.ang += this.rad - this.prevRad;
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
          this.ang = this.startAngle + this.selected * this.angleInterval;
        } else if (
          this.ang <
          this.startAngle +
            this.selected * this.angleInterval -
            this.angleInterval / 2
        ) {
          this.selected--;
          this.ang = this.startAngle + this.selected * this.angleInterval;
        }
        // this.ang %= 360;
        this.sprite.angle = this.ang;
      }

      this.prevRad = this.rad;
      console.log(this.ang, this.selected);
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
