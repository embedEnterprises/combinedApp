import * as utils from "../utils";
import * as Phaser from "phaser";
import { ServiceLocator } from "src/app/services/locator.services";

export class Horn extends Phaser.GameObjects.Container {
  dataStore;
  hornZone;
  isPressed: boolean = false;
  constructor(scene, config) {
    super(scene, 0, 0);
    this.dataStore = ServiceLocator.getInstance("dataStoreService");

    this.hornZone = new Phaser.GameObjects.Zone(scene, 0, 0, 100, 100)
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerdown", this.onPointerDown)
      .on("pointerup", this.onPointerUp);
    this.add(this.hornZone);
    utils.scaleToGameContainer(scene, this, this.hornZone, config);
    scene.add.existing(this);
  }

  onPointerDown = (e) => {
    this.isPressed = true;
    console.log("Horn pressed");
    this.dataStore.setHorn(true);
  };

  onPointerUp = (e) => {
    this.isPressed = false;
    console.log("Horn released");
    this.dataStore.setHorn(false);
  };
}