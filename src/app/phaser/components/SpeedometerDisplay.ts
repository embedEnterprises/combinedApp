export class SpeedometerDisplay extends Phaser.GameObjects.Container {
  private graphics;

  constructor(scene, config) {
    super(scene, 0, 0);
    this.graphics = scene.add.graphics();
    
  }
}