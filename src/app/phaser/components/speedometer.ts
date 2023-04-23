export class Speedometer extends Phaser.GameObjects.Container {
  public graphics;
  interval = 20;
  subInterval = 2;
  maxSpeed = 200;
  startAngle = 135;
  endAngle = 360 + 45;
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
  constructor(scene, x, y) {
    super(scene, x, y);
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
      this.radius - 90,
      this.startAngle,
      this.endAngle,
      false
    );
    this.externalArc = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius + 90,
      this.startAngle,
      this.endAngle,
      false
    );
    this.smallInternalArc = new Phaser.GameObjects.Arc(
      scene,
      0,
      0,
      this.radius - 190,
      this.startAngle + 30,
      this.endAngle - 30,
      false
    );
    this.speedText = new Phaser.GameObjects.Text(scene, -20, 0, "136", {
      fontFamily: "Segoe UI",
      fontSize: "124px",
      color: "#e9e9e9",
      fontStyle: "bold",
    });
    this.speedText1 = new Phaser.GameObjects.Text(scene, 135, 20, "kmh", {
      fontFamily: "Arial",
      fontSize: "34px",
      color: "#ff9401",
      fontStyle: "bold",
    });
    this.speedText.setOrigin(0.5);
    this.speedText1.setOrigin(0.5);

    this.graphics1.lineStyle(7, 0xa2a2a2, 1);
    this.graphics1.beginPath();
    this.graphics1.arc(
      0,
      0,
      this.radius - 190,
      Phaser.Math.DegToRad(this.startAngle + 30),
      Phaser.Math.DegToRad(this.endAngle - 30),
      false
    );
    this.graphics1.strokePath();

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
      // this.endCircle,
      this.externalArc,
      // this.smallInternalArc,
      this.speedText,
      this.speedText1,
      this.graphics,
      this.graphics1,
    ]);
    this.setScale(0.5);
    this.smallInternalArc.setStrokeStyle(7, 0xa2a2a2, 1);

    //Draw numbers and ticks
    let angle = this.startAngle;
    for (let i = 0; i <= this.maxSpeed; i += this.interval) {
      let point = this.getPointOnArc(this.numberCircle, angle);
      let text = this.scene.add.text(point.x, point.y, i.toString(), {
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
        0xdd7f00
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
        let endAngle = this.startAngle +
          ((this.endAngle - this.startAngle) * this.speed) / this.maxSpeed;
        // this.speedText.setText(Math.round(this.speed).toString());
        this.graphics.clear();
        this.graphics.lineStyle(15, 0xff9401, 1);
        this.graphics.beginPath();
        this.graphics.arc(
          0,
          0,
          this.radius + 40,
          Phaser.Math.DegToRad(this.startAngle),
          Phaser.Math.DegToRad(endAngle),
          false
        );
        this.graphics.strokePath();

        let point = this.getPointOnArc(this.ticksCircle, endAngle);
        console.log(point.x, point.y)
        // this.endCircle.setPosition(this.x-point.x, this.y-point.y);
      },
    });
    tween.resume();
    //Draw external arc
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
