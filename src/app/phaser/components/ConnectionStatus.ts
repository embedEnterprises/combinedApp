import Phaser from "phaser";
import * as utils from "../utils";
import { Data } from "@angular/router";
import { DataStoreService } from "src/app/services/data-store.service";
import { ServiceLocator } from "src/app/services/locator.services";

export class ConnectionStatus extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, config) {
    super(scene, 0, 0); // Corrected the positioning
    const connectionIcon = new Phaser.GameObjects.Image(
      scene,
      0,
      0,
      "connectionIcon"
    )
      .setOrigin(0)
      .setScale(0.3, 0.2)
      .setTint(0x00ff00)
      .setAlpha(1);

    this.add([connectionIcon]);
    utils.scaleToGameContainer(scene, this, connectionIcon, config);
    scene.add.existing(this);
  }
}