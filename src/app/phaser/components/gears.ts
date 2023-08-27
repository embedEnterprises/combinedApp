import * as Phaser from 'phaser';
// import { gears as config }  from '../constants';
import * as utils from "../utils";

export class Gears extends Phaser.GameObjects.Container {

  knob;
  gear;
  constructor(scene: Phaser.Scene, config) {
    super(scene, config.x, config.y, );
    const gearWidth    = 46,
          gearHeight   = 295,
          gearCount    = 3,
          gearDistance = 35,
          width        = gearCount * (gearWidth + gearDistance) - gearDistance,
          height       = gearHeight,
          xPos         = 120,
          yPos         = 80;
    const scaleFactor = Number(scene.sys.game.config.width) * 0.135 / width;
    let ptrid = 0;
    const bgImage = new Phaser.GameObjects.Image(scene, 0, 0, 'gearSet')
      .setOrigin(0)
      .setScale(1.5)
    
    this.knob = new Phaser.GameObjects.Sprite(scene , xPos + width/2, yPos + height/2, 'gearKnob')
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.4)
      .on('pointerdown', (e)=> {
        this.getAll().map((obj)=>{
          obj.setInteractive();
        })
        this.knob.disableInteractive();
        ptrid = e.id;
        scene.input.on('pointerup' , (e)=> {
          if(e.id == ptrid) {
            this.getAll().map((obj)=>{
              obj.disableInteractive();
            })
            this.knob.setInteractive();
            if (this.gear === "") {
              this.knob.setPosition(xPos + width*0.5, yPos + height*0.5)
            }
          }
        })
      })
    
    const handlePointerMove = (e, localX, localY, obj) => {
      let a = obj.getLocalPoint(e.worldX , e.worldY);
      if (localY < obj.height*0.25) {
        this.knob.setPosition( obj.x + obj.width*0.5 , obj.y + obj.height*0.125);
        this.gear = obj.name + '1';
      } else if(localY > obj.height*0.75) {
        this.knob.setPosition(obj.x + obj.width*0.5 ,  obj.y + obj.height*0.875);
        this.gear = obj.name + '2';
      } else {
        this.knob.setPosition(obj.x + a.x , obj.y + a.y)
        this.gear = "";
      }
    }

    const first = new Phaser.GameObjects.Zone(scene, xPos, yPos, gearWidth, gearHeight)
      .setOrigin(0).setName("1")
      .on('pointermove', (pointer, localX, localY)=> {handlePointerMove(pointer, localX, localY, first)});
    const second = new Phaser.GameObjects.Zone(scene, first.x + gearWidth+gearDistance, yPos, gearWidth, gearHeight)
      .setOrigin(0).setName("2")
      .on('pointermove', (pointer, localX, localY)=> {handlePointerMove(pointer, localX, localY, second)});
    const third = new Phaser.GameObjects.Zone(scene, second.x + gearWidth + gearDistance, yPos, gearWidth, gearHeight)
      .setOrigin(0).setName("3")
      .on('pointermove', (pointer, localX, localY)=> {handlePointerMove(pointer, localX, localY, third)});
      console.log((gearHeight*0.5-gearWidth*0.5))
    const middle = new Phaser.GameObjects.Zone(scene, xPos, yPos + (gearHeight*0.5-gearWidth*0.5), width, gearWidth)
      .setOrigin(0)
      .on('pointermove', (e, localX, localY) => {
        let a = middle.getLocalPoint(e.worldX , e.worldY);
        this.gear = "";
        if(a.x > (middle.width*0.5 - middle.height*0.5) && a.x < (middle.width*0.5 + middle.height*0.5)){
          this.knob.setPosition(xPos + width*0.5, yPos + height*0.5);
        }else {
          this.knob.setPosition(middle.x + a.x , middle.y + a.y)
        }
      });

    this.add([bgImage, first, second, third, middle, this.knob]);
    scene.add.existing(this)
    utils.setPos(scene, this, config.x, config.y);
    this.setScale(scaleFactor * config.scale)
  }

  getCurrentGear() {
    return this.gear;
  }
}
