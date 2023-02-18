import Phaser from "phaser";
export default class Pedal extends Phaser.GameObjects.Mesh {
  rotateRate = 1
  xuplim = 2.08;
  xlowlim = 1.4;
  zone;
  constructor(scene, x, y) {

    super(scene, x, y , 'skull');
    
    this.addVerticesFromObj('skull');
    this.modelRotation.x  = 1.45147308
    this.modelRotation.y = -0.142098
    this.panZ(118)
    // this.panX(15.90055066518034)
    // this.panY( 19.428080742210447)
    console.log(this.displayHeight , this.displayWidth)
  
    this.zone= this.scene.add.zone(this.x -35 , this.y , 200 , 400)
              .setInteractive();

    var graphics = this.scene.add.graphics();

    graphics.lineStyle(7, 0xffff00);

    graphics.strokeRect(this.zone.x-35, this.zone.y, this.zone.width, this.zone.height);
  
    this.zone.on('pointermove' , pointer => {
      console.log("pointer moce")
      if(!pointer.isDown){
        return;
      }
      console.log("pointer down")
      let val = pointer.velocity.y * (this.rotateRate / 600);
      let ldiff = this.xlowlim - this.modelRotation.x;
      let udiff = this.xuplim - this.modelRotation.x;
      if( ldiff < val && udiff > val ) {
        this.modelRotation.x += val;
      }
    })
    console.log(this.listeners('pointermove'))


    
  }

}