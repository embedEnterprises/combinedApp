import * as utils from "./../utils";

export class Speedometer extends Phaser.GameObjects.Container {
  public graphics;
  interval = 20;
  subInterval = 2;
  maxSpeed = 200;
  startAngle = 150;
  endAngle = 360 + 30;
  angleInterval =
    ((this.endAngle - this.startAngle) * this.interval) / this.maxSpeed;
  angleInterval1 =
    ((this.endAngle - this.startAngle) * this.subInterval) / this.maxSpeed;

  speed = 0;
  circle;
  radius = 400;
  numberCircle;
  ticksCircle;
  externalArc;
  smallInternalArc;
  mytween;
  graphics1;
  smallTick = {
    w: 10,
    h: 3,
  };
  largeTick = {
    w: 20,
    h: 6,
  };

  speedText: Phaser.GameObjects.Text;
  speedText1: Phaser.GameObjects.Text;
  endCircle: Phaser.GameObjects.Arc;

  constructor(scene, config) {
    super(scene, 0, 0);
    this.graphics = scene.add.graphics();
    this.graphics1 = scene.add.graphics();
    this.ticksCircle = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );
    this.numberCircle = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius - 60,
      this.startAngle,
      this.endAngle,
      false
    );
    this.externalArc = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius + 40,
      this.startAngle,
      this.endAngle,
      false
    );
    // this.smallInternalArc = new Phaser.GameObjects.Arc(
    //   scene,
    //   0,
    //   0,
    //   this.radius - 190,
    //   this.startAngle + 30,
    //   this.endAngle - 30,
    //   false
    // );
    this.speedText = new Phaser.GameObjects.Text(scene, -10, -100, "136", {
      fontFamily: "digitBold",
      fontSize: "124px",
      color: "#ffffff",
    });
    this.speedText1 = new Phaser.GameObjects.Text(scene, 165, -80, "kmh", {
      fontFamily: "digitalPlayBold",
      fontSize: "34px",
      color: "#ffffff",
      fontStyle: "bold",
    });
    this.speedText.setShadow(7,7,'#0b0b0bd1',0.8);
    this.speedText.setOrigin(0.5);
    this.speedText1.setOrigin(0.5);

    // this.graphics1.lineStyle(7, 0xa2a2a2, 1);
    // this.graphics1.beginPath();
    // this.graphics1.arc(
    //   0,
    //   0,
    //   this.radius - 190,
    //   Phaser.Math.DegToRad(this.startAngle + 30),
    //   Phaser.Math.DegToRad(this.endAngle - 30),
    //   false
    // );
    // this.graphics1.strokePath();

    //Draw the small circle on the end of external arc
    this.endCircle = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      20,
      0,
      360,
      false,
      0xffffff
    );

    this.add([
      this.ticksCircle,
      this.numberCircle,
      this.endCircle,
      this.externalArc,
      // this.smallInternalArc,
      this.speedText,
      this.speedText1,
      this.graphics,
      this.graphics1,
    ]);

    utils.scaleToGameContainer(scene, this, this.externalArc, config);

    // this.smallInternalArc.setStrokeStyle(7, 0xa2a2a2, 1);

    //Draw numbers and ticks
    let angle = this.startAngle;
    for (let i = 0; i <= this.maxSpeed; i += this.interval) {
      let point = this.getPointOnArc(this.numberCircle, angle);
      let text = this.scene.add.text(point.x, point.y, i.toString(), {
        fontFamily:"frozen-crystal",
        fontSize: "20px",
        color: "#ffffff",
      });
      text.setOrigin(0.5);

      let point2 = this.getPointOnArc(this.ticksCircle, angle);
      let rect = this.scene.add.rectangle(
        point2.x,
        point2.y,
        this.largeTick.w,
        this.largeTick.h,
        0xffffff
      );
      rect.setOrigin(0.5, 0.5);
      rect.setAngle(angle);
      rect.depth = 2;
      angle += this.angleInterval;
    }
    //Draw small ticks
    angle = this.startAngle;
    for (let i = 0; i <= this.maxSpeed; i += this.subInterval) {
      let point2 = this.getPointOnArc(this.ticksCircle, angle);
      let rect = this.scene.add.rectangle(
        point2.x,
        point2.y,
        this.smallTick.w,
        this.smallTick.h,
        0xb7c2f7
      );
      rect.setOrigin(0.5, 0.5);
      rect.setAngle(angle);
      rect.depth = 1;
      angle += this.angleInterval1;
      this.endCircle.setPosition(point2.x, point2.y);
    }
    var tween = this.scene.tweens.addCounter({
      from: 0,
      to: this.maxSpeed,
      duration: 3000,
      paused: true,
      yoyo: true,
      repeat: -1,
      ease: Phaser.Math.Easing.Linear,
      onUpdate: (val) => {
        this.speed = val.getValue();
        let endAngle =
          this.startAngle +
          ((this.endAngle - this.startAngle) * this.speed) / this.maxSpeed;
        // this.speedText.setText(Math.round(this.speed).toString());
        this.graphics.clear();
        this.graphics.lineStyle(15, 0xb7c2f7, 1);
        this.graphics.beginPath();
        this.graphics.arc(
          this.externalArc.x,
          this.externalArc.y,
          this.externalArc.radius,
          Phaser.Math.DegToRad(this.externalArc.startAngle),
          Phaser.Math.DegToRad(endAngle),
          false
        );
        this.graphics.strokePath();
        let point = this.getPointOnArc(this.externalArc, endAngle);
        // console.log(point.x, point.y)
        this.endCircle.setPosition(point.x - this.x, point.y - this.y);
      },
    });
    tween.resume();
    scene.add.existing(this);
  }

  public getPointOnArc(obj, angle: number): Phaser.Math.Vector2 {
    const radians = Phaser.Math.DegToRad(angle);
    const scale = this.scaleX;
    const x = this.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
    const y = this.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
    return new Phaser.Math.Vector2(x, y);
  }

  // Override preUpdate method
  preUpdate(time, delta) {
    super.update(time, delta);
    this.update();
  }
  update() {}
}
