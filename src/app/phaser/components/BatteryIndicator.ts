import Phaser from 'phaser';

export class BatteryIndicator extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, percentage: number) {
    super(scene, x, y);

    const numBars = 5;
    const barWidth = 15;
    const barHeight = 20;
    const spacing = 50;

    // Add the lighting icon on the left side of the bars
    const lightingIcon = scene.add.image(0, 0, 'lightingIcon'); // Replace 'lightingIcon' with your asset key
    lightingIcon.setScale(0.2);
    this.add(lightingIcon);

    // Add the battery bars with round corners
    for (let i = 0; i < numBars; i++) {
      const barX = i * barWidth + lightingIcon.displayWidth + spacing; // Align bars to the right of the icon
      console.log("i=" + i + " barX = " + barX);
      const bar = this.scene.add.graphics({ x: barX, y: 0 });
      bar.fillStyle(0xffffff); // Set the color of the bars, you can adjust this as needed
      bar.fillRoundedRect(0, 0, barWidth, barHeight, 5); // Use the height to round the corners
      this.add(bar);
    }

    // Implement logic to update the percentage
    this.updatePercentage(percentage);
    scene.add.existing(this);
  }

  private updatePercentage(percentage: number) {
    // Implement logic to update the bars based on the percentage
    // You can fill the bars partially based on the percentage
    // For example, if the percentage is 50, fill 5 out of 10 bars, etc.
  }
}
