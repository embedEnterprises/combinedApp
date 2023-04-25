import { Injectable } from "@angular/core";
import * as Phaser from "phaser";
import Break from "./components/break";
import Steer from "./components/steer";
import { Gears } from "./components/gears";
import { breakConf, gasConf, dialConf } from "./constants";
import { Speedometer } from "./components/speedometer";
import { Dial } from "./components/dial";

@Injectable()
export class GameScene extends Phaser.Scene {
  private steer: Phaser.GameObjects.Sprite;
  private break: Break;
  private gas: Break;
  private gears: Gears;
  private speedometer: Speedometer;
  private ledKnob: Dial;

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.svg(
      "steeringWheel",
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Steering-wheel.svg",
      { width: 300, height: 300 }
    );
    this.load.svg("break", "assets/break.svg", { width: 300, height: 300 });
    this.load.svg("gas", "assets/gas.svg", { width: 300, height: 300 });
    this.load.svg("gearSet", "assets/gear.svg", { width: 300, height: 300 });
    this.load.image("dial", "assets/dial.png");
    this.load.svg("gearKnob", "assets/gear_knob.svg", {
      width: 300,
      height: 300,
    });
    this.load.obj("skull", "assets/breakObj2.obj");
  }

  create() {
    this.steer = new Steer(this, 'steeringWheel');
    this.gas = new Break(this, gasConf);
    this.break = new Break(this, breakConf);
    this.gears = new Gears(this, 500, 100).setScale(0.8);
    this.speedometer = new Speedometer(this, 935, 700);
    this.ledKnob = new Dial(this, dialConf);
  }

}
