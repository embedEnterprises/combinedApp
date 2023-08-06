import * as utils from "./../utils";

export class Speedometer extends Phaser.GameObjects.Container {
  graphics;
  graphics1;
  interval = 20;
  subInterval = 2;
  maxSpeed = 200;
  startAngle = 150;
  endAngle = 360 + 30;
  angleInterval =
    ((this.endAngle - this.startAngle) * this.interval) / this.maxSpeed;
  angleInterval1 =
    ((this.endAngle - this.startAngle) * this.subInterval) / this.maxSpeed;
  radius=300;
  constructor(scene, config) {
    super(scene, 800, 500);
    const bg = scene.add.image(0, -80, "speedometer-content");
    this.add(bg);
    // this.graphics = scene.add.graphics();
    // this.drawOuterArc();
    // this.drawTriangles();
    // this.drawLines();
    // this.add(this.graphics);
    // add black backgraound color to speedometer
    // this.graphics1 = scene.add.graphics();
    // this.graphics1.fillStyle(0x000000, 1);
    // this.graphics1.fillCircle(0, 0, this.radius + 50);
    // this.add(this.graphics1);
    // this.sendToBack(this.graphics1);
    scene.add.existing(this);

  }

  drawLines() {
    const lineArc = new Phaser.GameObjects.Arc(
      this.scene,
      0,
      0,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );
    let angle = this.startAngle;
    for (let i = 0; i <= this.maxSpeed; i += this.interval) {
      let point = utils.getPointOnArc(this, lineArc, angle);
      let localPoint = this.getLocalPoint(point.x, point.y);
      let line = new Phaser.GameObjects.Line(
        this.scene,
        localPoint.x,
        localPoint.y,
        localPoint.x,
        localPoint.x,
        localPoint.x + 5,
        localPoint.y + 5,
        0x00ff00
      );
      line.setOrigin(1, 1);
      line.setAngle(angle - 90);
      line.setLineWidth(2);
      this.add(line);
      angle += this.angleInterval;
    }
  }

  drawTriangles() {
    const triangleArc = new Phaser.GameObjects.Arc(
      this.scene,
      0,
      0,
      this.radius - 10,
      this.startAngle,
      this.endAngle,
      false
    );
    let angle = this.startAngle;
    for (let i = 0; i <= this.maxSpeed; i += this.interval) {
      let point = utils.getPointOnArc(this, triangleArc, angle);
      let localPoint = this.getLocalPoint(point.x, point.y);
      let triangle = new Phaser.GameObjects.Triangle(
        this.scene,
        localPoint.x,
        localPoint.y,
        0, 128,
        64, 0,
        128, 128,
        0x00ff00
      );
      triangle.setOrigin(1, 1);
      triangle.setAngle(angle - 90);
      triangle.setScale(0.2);
      this.add(triangle);
      angle += this.angleInterval;
    } 
  }



  drawOuterArc() {
    this.graphics.lineStyle(2, 0xffffff, 1);
    this.graphics.beginPath();
    this.graphics.arc(0,0,this.radius, Phaser.Math.DegToRad(this.startAngle), Phaser.Math.DegToRad(this.endAngle), false);
    this.graphics.strokePath();
    this.graphics.closePath();
  }
}
