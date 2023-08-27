import Phaser from "phaser";
import * as utils from "../utils";
import { steer as config } from "../constants";

export default class Steer extends Phaser.GameObjects.Sprite {
  prevRad;
  steerPtr;
  rad;
  steerTwin;
  steerSpeed: number = 10;
  ang = 0;
  constructor(scene:Phaser.Scene, texture){
    super(scene, 0, 0, texture);
    this.setOrigin(0.5, 0.5)
        .setInteractive()
        .on('pointerdown', this.onPointerDown)
        .scene.add.existing(this);
    utils.scaleToGameW(scene , this , config.w);
    utils.setPos(scene , this, config.x, config.y);
  }

  onPointerDown(e) {
   if(this.steerTwin != undefined){
      this.steerTwin.stop();
   }
   let x = this.getCenter().x
   let y = this.getCenter().y
   this.prevRad = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(e.x,e.y , x,y ));
   this.steerPtr = e.id;
   this.scene.input.on('pointermove', this.onPointerMove, this);
   this.scene.input.on('pointerup', this.onPointerUp, this);
  }

  onPointerMove(e){
    if (this.steerPtr == e.id) {
      let x = this.getCenter().x
      let y = this.getCenter().y
      this.rad = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(e.x,e.y , x,y ));
      if (this.prevRad < 0 && this.rad > 0) {
         this.ang-= Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else if (this.prevRad > 0 && this.rad < 0) {
        this.ang += Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else {
        this.ang += this.rad - this.prevRad;
      }
      this.angle = this.ang;
      this.prevRad = this.rad;

    }
  }

  onPointerUp(e){
    if (this.steerPtr == e.id) {
      this.scene.input.off('pointermove')
      this.scene.input.off('pointerup')
      this.steerPtr = null;
      this.steerTwin = this.scene.tweens.addCounter({
        from: this.ang,
        to: 0,
        duration: Math.abs(this.ang * this.steerSpeed),
        repeat: 0,
        ease: Phaser.Math.Easing.Quadratic.Out,
        onUpdate: (tween) => 
        {
            this.ang = tween.getValue()
            this.setAngle( tween.getValue());
        },
        
    });
    }
  }
}