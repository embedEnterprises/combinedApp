import * as Phaser from 'phaser';

export class ScalableSVGPath extends Phaser.GameObjects.Graphics {
  private pathData: string;

  constructor(scene: Phaser.Scene, x: number, y: number, pathData: string, color: number, scale: number) {
    super(scene, { x, y });

    // Create the path using the path data and color
    this.pathData = pathData;
    this.fillStyle(color);

    // Set the scale of the path
    this.setScale(scale);
    scene.add.existing(this);
  }
}