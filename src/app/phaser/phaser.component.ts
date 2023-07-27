import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameScene } from './game.scene';

@Component({
  selector: 'app-game',
  template: '<div #game></div>',
  styleUrls: ['./phaser.component.css']
})

export class PhaserComponent implements OnInit {
  private steeringWheel;
  private game: Phaser.Game;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: 'game',
      // width: 1200,
      // height: 600,
      transparent: true,
      scene: GameScene,
      backgroundColor: "#0000FF",
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
      },
      input: {
        activePointers: 3,

      },
      physics:{
        default:'matter'
      },
    });
    this.game.input.addPointer(3);

    window.onresize = () => {
      this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
      this.game.scale.refresh();
    };

  }





}
