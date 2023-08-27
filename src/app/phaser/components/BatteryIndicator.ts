import Phaser from "phaser";
import * as utils from "../utils";
import { Data } from "@angular/router";
import { DataStoreService } from "src/app/services/data-store.service";
import { ServiceLocator } from "src/app/services/locator.services";

export class BatteryIndicator extends Phaser.GameObjects.Container {
  graphics;
  spacing = 20;
  barW = 70;
  barH = 0;
  barX = 0;
  barY = 0;
  barRadius = 10;
  barCount = 5;
  currentBattery = 0;
  prevBattery = -1;
  dataStore: DataStoreService;

  constructor(scene: Phaser.Scene, config) {
    super(scene, 0, 0); // Corrected the positioning
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    const lightingIcon = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "lightingIcon"
    )
      .setOrigin(0)
      .setScale(0.3, 0.2)
      .setTint(0x00ff00)
      .setAlpha(1);

    this.barH = lightingIcon.displayHeight;
    this.barX = lightingIcon.displayWidth + 5;

    this.graphics = scene.add.graphics();
    //set fill style to green color
    this.graphics.fillStyle(0x00ff00, 1);
    for (let i = 0; i < this.barCount; i++) {
      const bar = this.graphics.fillRoundedRect(
        this.barX + i * (this.barW + this.spacing),
        this.barY,
        this.barW,
        this.barH,
        this.barRadius
      );

      this.add([bar]);
    }
    this.add([lightingIcon]);
    utils.scaleToGameContainer(scene, this, lightingIcon, config);
    scene.add.existing(this);
    this.update(this.dataStore.getBattery());
    this.dataStore.batteryObservable.subscribe((data) => {
      this.update(data);
    });
  }

  update = (percentage: number) => {
    if (percentage !== this.prevBattery) {
      this.updateBattery(percentage);
    }
  };

  updateBattery = (percentage: number) => {
    this.graphics.clear();
    // get the number of bar according to percentage
    const barCount1 = Math.ceil((percentage * 5) / 100);
    // set fill style to three different colors, green for 5, yellow for 3 and red for 1
    if (barCount1 > 3) {
      this.graphics.fillStyle(0x00ff00, 1);
    } else if (barCount1 > 1) {
      this.graphics.fillStyle(0xffa500, 1);
    } else {
      this.graphics.fillStyle(0xff0000, 1);
    }

    // draw the bar
    for (let i = 0; i < this.barCount; i++) {
      if (i + 1 > barCount1) {
        this.graphics.fillStyle(0x000000, 0.3);
      }
      const bar = this.graphics.fillRoundedRect(
        this.barX + i * (this.barW + this.spacing),
        this.barY,
        this.barW,
        this.barH,
        this.barRadius
      );
      this.add([bar]);
    }
  };
}
