import { Data } from "@angular/router";
import * as utils from "../utils";
import * as Phaser from "phaser";
import { DataStoreService } from "src/app/services/data-store.service";
import { ServiceLocator } from "src/app/services/locator.services";

export class LedSelector extends Phaser.GameObjects.Container {
  sprite: Phaser.GameObjects.Sprite;
  ang: number;
  ledKnobPtr: any;
  circlesGroup: Phaser.GameObjects.Group;
  dataStore: DataStoreService;
  isExpanded: boolean = false;
  selectedMode: number = 0;
  textGroup: Phaser.GameObjects.Group;

  constructor(scene, config) {
    super(scene, 0, 0);
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.sprite = new Phaser.GameObjects.Sprite(scene, 0, 0, "headlightIcon")
      .setOrigin(0.5, 0.48)
      .setInteractive()
      .setAngle(this.ang)
      .setScale(0.3)
      .on("pointerdown", this.onPointerDown)
      .setTint(0xffffff);

    this.circlesGroup = this.scene.add.group();
    this.textGroup = this.scene.add.group();
    let x = this.sprite.getCenter().x;
    let y = this.sprite.getCenter().y;
    for (let i = 1; i <= 6; i++) {
      const circle = this.scene.add.circle(x, y, 20, 0xffffff).setInteractive();
      circle.setName(i.toString());
      circle.on("pointerdown", (pointer, localX, localY) => {
        this.setSelectedMode(Number(circle.name));
        setTimeout(() => {
          this.onPointerDown(pointer);
        }, 300);
      });
      const center = circle.getLeftCenter();
      // set text color to black
      const text = this.scene.add.text(center.x, center.y, i.toString());
      text.setColor("#000000");
      text.setFontStyle("bold");
      text.setFontSize("25px");
      this.circlesGroup.add(circle);
      this.textGroup.add(text);
      this.add([circle, text]);
    }
    this.circlesGroup.setVisible(false);

    utils.scaleToGameContainer(scene, this, this.sprite, config);
    this.add([this.sprite]);
    scene.add.existing(this);
  }

  setSelectedMode(mode: number) {
    this.selectedMode = mode;
    const childs = this.circlesGroup.getChildren();
    for (let i = 0; i < childs.length; i++) {
      if (mode === i + 1) {
        (childs[i] as Phaser.GameObjects.Shape).setFillStyle(0xff0000);
        // set text color to white
        (this.textGroup.getChildren()[i] as Phaser.GameObjects.Text).setColor("#ffffff");
      } else {
        (childs[i] as Phaser.GameObjects.Shape).setFillStyle(0xffffff);
        // set text color to black
        (this.textGroup.getChildren()[i] as Phaser.GameObjects.Text).setColor("#000000");
      }
    }
    this.dataStore.setLighting(this.selectedMode);
  }

  onPointerDown = (e) => {
    this.scene.tweens.killAll();
    let x = this.sprite.getCenter().x;
    this.ledKnobPtr = e.id;
    this.scene.tweens.add({
      targets: this.sprite,
      angle: this.isExpanded ? 0 : 180,
      duration: 1000,
      ease: Phaser.Math.Easing.Expo.Out,
      onStart: () => {
        this.circlesGroup.setVisible(true);
      },
      onComplete: () => {
        if (!this.isExpanded) this.circlesGroup.setVisible(false);
      },
    });

    const childs = this.circlesGroup.getChildren();
    const texts = this.textGroup.getChildren();
    const groupSize = this.circlesGroup.getLength();

    for (let i = 1; i <= groupSize; i++) {
      let distance = x + 50 * i + 30;
      if (this.isExpanded) {
        distance = x;
      }
      this.scene.tweens.add({
        targets: childs[i - 1],
        x: distance,
        alpha: this.isExpanded ? 0 : 1,
        duration: 1000,
        ease: Phaser.Math.Easing.Expo.Out,
        onUpdate: () => {
          const center = (childs[i - 1] as Phaser.GameObjects.Sprite).getCenter();
          (texts[i - 1] as Phaser.GameObjects.Text).setPosition(center.x-7, center.y-12);
        },
      });

    }
    this.isExpanded = !this.isExpanded;
    this.scene.input.on("pointerup", this.onPointerUp, this.sprite);
  };

  onPointerUp = (e) => {
    if (this.ledKnobPtr == e.id) {
      this.ledKnobPtr = null;
    }
  };
}
