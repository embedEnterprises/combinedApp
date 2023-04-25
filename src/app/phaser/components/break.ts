import Phaser from "phaser";
import { scaleToGameW, scaleToGameZone, setPos } from "../utils";

export default class Break extends Phaser.GameObjects.Mesh {

  debug;
  zone;
  ptrId;
  constructor (scene, conf){
    super(scene, conf.x, conf.y , 'break',);
    Phaser.Geom.Mesh.GenerateGridVerts({
      texture : 'break',
      mesh: this,
      widthSegments : 6,
    });
    this.scene.add.existing(this);
    this.scaleToGameW(this , conf.w);
    setPos(scene, this, conf.x, conf.y);

    this.zone= this.scene.add.zone(this.x , this.y , this.displayWidth,this.displayHeight).setOrigin(0)
                .setInteractive();
    scaleToGameZone(scene, this.zone, conf.zw, conf.zh)
    setPos(scene, this.zone, conf.zx, conf.zy)

    this.zone.on('pointerdown', this.handlePointerDown , this);
  }

  private handlePointerDown(e) {
    this.ptrId = e.id;
    this.scene.input.on('pointermove' , this.handlePointerMove, this);
    this.scene.input.on('pointerup' , this.handlePointerUp, this);
    console.log("hello")
  }

  
  private handlePointerMove(e) {
    if(this.ptrId == e.id) {
      console.log("there")
      const rotateRate = 1,
      xuplim = 1,
      xlowlim = 0
      let val = e.velocity.y * (rotateRate / 600);
      let ldiff = xlowlim - this.modelRotation.x;
      let udiff = xuplim - this.modelRotation.x;
      if( ldiff < val && udiff > val ) {
        this.modelRotation.x += val;
      }
    }
  }
  private handlePointerUp(e) {
    if (this.ptrId == e.id) {
      this.scene.input.off('pointermove')
      this.scene.input.off('pointerup')
      this.ptrId == null;
    }
  }


  public scaleToGameW(obj, per) {
    obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
    obj.scaleY = obj.scaleX;
    var q = 2.5*Number(this.scene.sys.game.config.width) / 915;
    obj.panZ(q);
  }
  // public scaleToGameZone(perW , perH) {
  //   this.zone.displayWidth = Number(this.scene.sys.game.config.width) * perW;
  //   this.zone.displayHeight = Number(this.scene.sys.game.config.height) * perH;
  // }
  // setPos(obj, x: number, y: number) {
  //   obj.setPosition(Number(this.scene.sys.game.config.width) * x, Number(this.scene.sys.game.config.height) * y);
  // }
}