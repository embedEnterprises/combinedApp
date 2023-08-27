import { Injectable } from "@angular/core";
import * as Phaser from "phaser";
import Break from "./components/break";
import Steer from "./components/steer";
import { Gears } from "./components/gears";
import {
  breakConf,
  gasConf,
  dialConf,
  speedometerConf,
  gearsConf,
  gearShifterConf,
  batteryIndicatorConf,

} from "./constants";
// import { Speedometer } from "./components/speedometer";
import { Dial } from "./components/dial";
import { BatteryIndicator } from "./components/BatteryIndicator";
import { Speedometer } from "./components/speedometer";
import { GearShifter } from "./components/GearShifter";

@Injectable()
export class GameScene extends Phaser.Scene {
  private steer: Phaser.GameObjects.Sprite;
  private break: Break;
  private gas: Break;
  private gears: Gears;
  private speedometer: Speedometer;
  private ledKnob: Dial;
  private batteryIndicator: BatteryIndicator;
  private gearShifter: GearShifter;
  private speed : number = 0;
  private maxSpeed : number = speedometerConf.maxSpeed;

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
    // this.load.image("break", "assets/breakPng.png");
    this.load.svg("gas", "assets/gas.svg", { width: 300, height: 300 });
    this.load.svg("gearSet", "assets/gear.svg", { width: 300, height: 300 });
    this.load.image("dial", "assets/dial.png");
    this.load.image("gearStand", "assets/gear-stands.png");
    this.load.image("lightingIcon", "assets/icons/flash.png");
    this.load.svg("gearKnob", "assets/gear_knob.svg", {
      width: 300,
      height: 300,
    });
    this.load.obj("skull", "assets/breakObj2.obj");

    this.load.svg("speedometer-content", "assets/speedometerContent.svg", {
      width: 800,
      height: 800,
      });
  }

  create() {
    const canva = document.getElementsByTagName("canvas")[0];
    canva.style.background = "linear-gradient(120deg, rgb(51 50 104) 0%, rgb(110, 165, 183) 100%)";
    canva.style.background = "url(assets/AppBG2.jpg) no-repeat center center";
    this.steer = new Steer(this, 'steeringWheel');
    this.gas = new Break(this, gasConf);
    this.break = new Break(this, breakConf);
    this.gears = new Gears(this, gearsConf);
    this.speedometer = new Speedometer(this, speedometerConf);
    this.ledKnob = new Dial(this, dialConf);
    this.batteryIndicator = new BatteryIndicator(this, batteryIndicatorConf);
    this.gearShifter = new GearShifter(this, gearShifterConf);
  }

  update( time, delta) {
    this.calculateSpeed();
    this.speedometer.update(this.speed);
  }

  private calculateSpeed() {
    let gearVal = this.gearShifter.getCurrentGear();
    // console.log(gearVal);
    let gasVal = this.gas.getValue();
    let breakVal = this.break.getValue();

    if(gearVal === "P" || gearVal === "N"){
      this.speed = 0;
      return;
    }
    
    let factor=10;

    let prevValue = this.speed;
    this.speed = this.speed + (gasVal - breakVal) - 0.2;
    if(this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if(this.speed < 0) this.speed = 0;

    if(gearVal === "R") this.speed = -this.speed;

  }

}
