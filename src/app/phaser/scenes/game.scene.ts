import { Injectable } from "@angular/core";
import * as Phaser from "phaser";
//Components
import { Break, Gas } from "../components/Pedals";
import { Gears } from "../components/gears";
import { Dial } from "../components/dial";
import { BatteryIndicator } from "../components/BatteryIndicator";
import { Speedometer } from "../components/speedometer";
import { GearShifter } from "../components/GearShifter";
import { Steer } from "../components/steer";
import { Horn } from "../components/Horn";
//Constants
import {
  breakConf,
  gasConf,
  dialConf,
  speedometerConf,
  gearsConf,
  gearShifterConf,
  batteryIndicatorConf,
  steerConf,
  hornConf,
} from "../constants";
//Services
import { DataStoreService } from "../../services/data-store.service";
import { ServiceLocator } from "../../services/locator.services";

@Injectable()
export class GameScene extends Phaser.Scene {
  private steer: Phaser.GameObjects.Sprite;
  private break: Break;
  private gas: Gas;
  private gears: Gears;
  private speedometer: Speedometer;
  private ledKnob: Dial;
  private batteryIndicator: BatteryIndicator;
  private gearShifter: GearShifter;
  private horn: Phaser.GameObjects.Container;
  private speed: number = 0;
  private maxSpeed: number = speedometerConf.maxSpeed;
  private dataStore: DataStoreService;
  private ws: any;
  private speedTwin;
  decRate: number = 60;

  constructor() {
    super({ key: "GameScene" });

    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.ws = ServiceLocator.getInstance("websocketService");
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

    this.load.image("bgImage" , "assets/AppBG2.jpg");
  }

  create() {
    // const canva = document.getElementsByTagName("canvas")[0];
    // canva.style.background =
    //   "linear-gradient(120deg, rgb(51 50 104) 0%, rgb(110, 165, 183) 100%)";
    // canva.style.background = "url(assets/AppBG2.jpg) no-repeat center center";
    // canva.style.backgroundSize = "contain";

      // Load the background image
  const backgroundImage = this.add.image(0, 0, "bgImage");
  
  // Set the background image to cover the entire game canvas
  backgroundImage.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
  backgroundImage.setOrigin(0, 0); 
    this.steer = new Steer(this, steerConf);
    this.gas = new Break(this, gasConf);
    this.break = new Break(this, breakConf);
    this.gears = new Gears(this, gearsConf);
    this.speedometer = new Speedometer(this, speedometerConf);
    this.ledKnob = new Dial(this, dialConf);
    this.batteryIndicator = new BatteryIndicator(this, batteryIndicatorConf);
    this.gearShifter = new GearShifter(this, gearShifterConf);
    this.horn = new Horn(this, hornConf);
    this.dataStore.setBattery(50);
    this.attachEvents();
  }

  update() {
    this.calculateSpeed();
    this.speedometer.update(this.speed);
  }

  private createSpeedTwin() {
    this.speedTwin = this.tweens.addCounter({
      from: this.speed,
      to: 0,
      duration: Math.abs(this.speed * this.decRate),
      repeat: 0,
      ease: Phaser.Math.Easing.Expo.Out,
      onUpdate: (tween) => {
        this.speed = tween.getValue();
        this.dataStore.setSpeed(this.speed);
      },
    });
  }

  private calculateSpeed() {
    let gearVal = this.gearShifter.getCurrentGear();
    let gasVal = this.gas.getValue();
    let breakVal = this.break.getValue();

    if (gasVal === 0 && breakVal === 0 && this.speed === 0) return;
    if (gearVal === "P" || gearVal === "N") {
      this.speed = 0;
      return;
    }

    if (gasVal === 0 && breakVal === 0 && this.speed !== 0) {
      if (!(this.speedTwin && this.speedTwin.isPlaying()))
        this.createSpeedTwin();
      return;
    }

    if (gasVal !== 0 || breakVal !== 0) {
      if (this.speedTwin && this.speedTwin.isPlaying()) {
        this.speedTwin.stop();
      }
    }

    this.speed = this.speed + (gasVal - breakVal * 2);
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (this.speed < 0) this.speed = 0;

    this.dataStore.setSpeed(this.speed);
  }

  private attachEvents() {
    this.dataStore.lightingObservable.subscribe((newValue: number) => {
      this.ws.sendMessage("L:" + newValue);
    });

    this.dataStore.speedObservable$.subscribe(({ previous, current }) => {
      if (previous !== current) {
        if (this.gearShifter.getCurrentGear() === "R") {
          this.ws.sendMessage("R:" + current);
        } else {
          this.ws.sendMessage("F:" + current);
        }
      }
    });

    this.dataStore.steerObservable$.subscribe(({ previous, current }) => {
      if (previous !== current) {
        if (current > 0) {
          this.ws.sendMessage("C:" + current);
        } else {
          this.ws.sendMessage("A:" + Math.abs(current));
        }
      }
    });

    this.dataStore.hornObservable.subscribe((newValue: boolean) => {
      let val = newValue ? 1 : 0;
      this.ws.sendMessage("H:" + val);
    });

    this.ws.onMessage().subscribe((message) => {
      console.log(message);
      let data = message.split(":");
      switch (data[0]) {
        case "L":
          this.dataStore.setLighting(parseInt(data[1]));
          break;
        case "T":
          this.dataStore.setBattery(parseInt(data[1]));
          break;
        default:
          break;
      }
    });
  }
}
