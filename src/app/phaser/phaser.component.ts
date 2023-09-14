import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GameScene } from "./scenes/game.scene";
import { WifiManagerScene } from "./scenes/wifiManager.scene";
import { ServiceLocator } from "../services/locator.services";

@Component({
  selector: "app-game",
  template: '<div id="gameContainer"></div>',
  styleUrls: ["./phaser.component.css"],
})
export class PhaserComponent implements OnInit {
  private steeringWheel;
  private game: Phaser.Game;
  dataStore: any;
  ws: any;

  constructor(private http: HttpClient) {
    this.dataStore = ServiceLocator.getInstance("dataStoreService");
    this.ws = ServiceLocator.getInstance("websocketService");
  }

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: "gameContainer",
      // width: 1200,
      // height: 600,
      transparent: true,
      scene: [ GameScene],
      backgroundColor: "#0000FF",
      scale: {
        mode: Phaser.Scale.FIT,
        parent: "gameContainer",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      input: {
        activePointers: 3,
      },
      physics: {
        default: "matter",
      },
      dom: {
        createContainer: true,
      },
    });


    this.game.input.addPointer(3);
    console.log(this.ws.isOpen());
    // if(this.ws.isOpen()) {
    //   this.game.scene.start("WifiManagerScene");
    // } else {
    //   this.game.scene.start("GameScene");
    // }
    window.onresize = () => {
      this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
      this.game.scale.refresh();
    };
  }
}
