import Phaser from "phaser";

export default class Break extends Phaser.GameObjects.Mesh {

  debug;
  zone;
  ptrId;
  constructor (scene , x,y,zx,zy){
    super(scene, x, y , 'break',);
    Phaser.Geom.Mesh.GenerateGridVerts({
      texture : 'break',
      mesh: this,
      widthSegments : 6,
      
    });
    this.scene.add.existing(this)
    this.scaleToGameW(this , 0.15);
    this.setPos(this,x,y);
    
    this.zone= this.scene.add.zone(this.x , this.y , this.displayWidth,this.displayHeight).setOrigin(0)
                .setInteractive();
    this.scaleToGameZone(0.10 , 0.45)
    this.setPos(this.zone, zx, zy)
    var graphics = this.scene.add.graphics();
    graphics.lineStyle(7, 0xffff00);
    graphics.strokeRect(this.zone.x , this.zone.y, this.zone.displayWidth, this.zone.displayHeight);
    this.zone.on('pointerdown', this.handlePointerDown , this);

  
  }

  private handlePointerDown(e) {
    this.ptrId = e.id;
    this.zone.on('pointermove' , this.handlePointeMove, this);
  }
  private handlePointeMove(e) {
    if(this.ptrId == e.id) {
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
      this.zone.off('pointermove')
      this.ptrId == null;
    }
  }


  public scaleToGameW(obj, per) {
    obj.displayWidth = Number(this.scene.sys.game.config.width) * per;
    obj.scaleY = obj.scaleX;
    var q = 2.5*Number(this.scene.sys.game.config.width) / 915;
    obj.panZ(q);
  }
  public scaleToGameZone(perW , perH) {
    this.zone.displayWidth = Number(this.scene.sys.game.config.width) * perW;
    this.zone.displayHeight = Number(this.scene.sys.game.config.height) * perH;
  }
  setPos(obj, x: number, y: number) {
    obj.setPosition(Number(this.scene.sys.game.config.width) * x, Number(this.scene.sys.game.config.height) * y);
  }
}