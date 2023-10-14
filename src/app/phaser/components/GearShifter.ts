import { DataStoreService } from "src/app/services/data-store.service";
import * as utils from "../utils";
import { ServiceLocator } from "src/app/services/locator.services";

export class GearShifter extends Phaser.GameObjects.Container {
  knob;
  gearZones = []; // Array to store the gear zones
  gearTexts = [];
  gearNames = ["P", "R", "N", "D"];
  gearCount = this.gearNames.length;
  graphics2;
  graphics;
  graphics3;
  spacing = 100;
  topLim;
  bottomLim;
  currentGear = this.gearNames[0];
  dataStore: DataStoreService;

  constructor(scene, config) {
    super(scene, config.x, config.y);
    const knobML = 60;
    const textML = 30;
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    if (!config.isVisible) {
      this.currentGear = "D";
      return;
    }
    const background = new Phaser.GameObjects.Image(scene, 0, 0, "gearStand")
      .setOrigin(0)
      .setScale(1, 0.9);
    this.knob = new Phaser.GameObjects.Sprite(
      scene,
      knobML + this.spacing / 2,
      this.spacing / 2,
      "gearKnob"
    )
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.3);
    scene.input.setDraggable(this.knob);

    for (let i = 0; i < this.gearCount; i++) {
      let text = scene.add.text(
        textML,
        i * this.spacing + this.spacing / 2,
        this.gearNames[i],
        {
          fontFamily: "roboto",
          fontSize: "25px",
          fontWeight: 800,
          color: "#ffffff",
        }
      );
      text.setOrigin(0.5);
      this.gearTexts[this.gearNames[i]] = text;
      this.add(text);

      const zone = scene.add
        .zone(knobML, i * this.spacing, this.spacing, this.spacing)
        .setOrigin(0.5)
        .setName(this.gearNames[i])
        .setRectangleDropZone(this.spacing, this.spacing)
        .setInteractive()
        .on("pointerdown", () => this.handlePointerDown(zone.name), this);

      this.add(zone);
      this.gearZones[this.gearNames[i]] = zone;
    }

    this.topLim = this.gearZones[this.gearNames[0]].y;
    this.bottomLim =
      this.gearZones[this.gearNames[this.gearCount - 1]].y + this.spacing;

    scene.input.on("drag", this.handleDrag);
    scene.input.on("dragend", this.handleDragend);

    utils.scaleToGameContainer(scene, this, background, config);
    this.add([this.knob, background])
      .setInteractive()
      .bringToTop(this.knob)
      .sendToBack(background);
    scene.add.existing(this);
  }

  private switchGear = (gearName) => {
    this.currentGear = gearName;
    this.dataStore.setGear(gearName);
    const zone = this.gearZones[gearName];
    let pos = this.getLocalPoint(zone.x, zone.y);
    this.knob.x = zone.x + zone.displayWidth / 2;
    this.knob.y = zone.y + zone.displayHeight / 2;

    this.gearNames.forEach((name) => {
      const text = this.gearTexts[name];
      if (name == gearName) text.setShadow(0, 0, "#00ff00", 10, true, true);
      else text.setShadow(0, 0, "#00ff00", 10, false, false);
    });
  };

  private handlePointerDown = (gearName) => {
    this.switchGear(gearName);
  };

  private handleDrag = (pointer, gameObject, dragX, dragY) => {
    let val = dragY;
    if (dragY < this.topLim) val = this.topLim;
    else if (dragY > this.bottomLim) val = this.bottomLim;
    gameObject.y = val;
  };

  private handleDragenter = (pointer, gameObject, dropZone) => {};

  private handleDragstart = (pointer, gameObject) => {
    gameObject.setTint(0xff0000);
  };

  private handleDragend = (pointer, gameObject) => {
    let dropZone;
    this.gearNames.forEach((name) => {
      // objY = this.getLocalPoint(this.knob);
      const zone = this.gearZones[name];
      const y = zone.y; //this.getLocalPoint(zone.x, zone.y).y;
      if (this.knob.y > y && this.knob.y < y + this.spacing) {
        dropZone = zone;
        return;
      }
    });
    this.switchGear(dropZone.name);
  };

  private handleDrop = (pointer, gameObject, dropZone) => {
    this.graphics3.clear();
    this.graphics3.lineStyle(3, 0xff0000);

    this.graphics3.strokeRect(
      dropZone.x,
      dropZone.y,
      dropZone.input.hitArea.width,
      dropZone.input.hitArea.height
    );

    let pos = this.getLocalPoint(dropZone.x, dropZone.y);
    gameObject.x = pos.x + this.spacing / 2;
    gameObject.y = pos.y + this.spacing / 2;
  };

  getCurrentGear = () => {
    return this.currentGear;
  };
}
