import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { TouchGesture } from 'blockly';
import * as Phaser from 'phaser';
import Pedal from './pedal';
import Break from './break';
// import { debug } from 'console';
@Injectable()
export class GameScene extends Phaser.Scene {

  private steeringWheel: Phaser.GameObjects.Sprite;
  private break: Phaser.GameObjects.Sprite;
  private gas: Phaser.GameObjects.Image;
  private x: number = 0;
  private y: number = 0;
  private prevRad;
  steerPtr;
  rad;
  txt;
  graphics;
  steerTwin;
  steerSpeed: number = 10;
  ang = 0;
  debug;
  pedal ;
  breakPedal;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.svg('steeringWheel', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Steering-wheel.svg', { width: 300, height: 300 });
    this.load.svg('break', 'assets/break.svg', { width: 300, height: 300 });
    this.load.svg('gas', 'assets/gas.svg', { width: 300, height: 300 });
    this.load.svg('gearSet', 'assets/gear.svg', { width:300, height: 300 });
    this.load.obj('skull', 'assets/breakObj2.obj');
  }

  create() {
    this.steeringWheel = this.add.sprite(200, 200, 'steeringWheel')
    // this.break = this.add.sprite(400, 200, 'break')
    // this.gas = this.add.sprite(600, 200, 'gas')
    this.pedal = new Break(this, 0.2 , 0.7,0.205,0.5);
    this.breakPedal = new Break(this, 0.1 , 0.7,0.105,0.5);
    // this.gas.setScale(1 ,0.5);
    this.steeringWheel.setOrigin(0.5, 0.5);
    this.steeringWheel.setInteractive();
    // this.gas.setInteractive();
    // this.break.setInteractive();

    // this.scaleToGameW(this.break, 0.2);
    this.scaleToGameW(this.steeringWheel, 0.3);
    // this.scaleToGameW(this.gas, 0.2);
    // this.setPos(this.gas, 0.2, 0.7)
    // this.setPos(this.break, 0.2, 0.7)
    this.setPos(this.steeringWheel, 0.8, 0.7)

    this.steeringWheel.on('pointerdown', this.handleSteerDown, this);

    this.steeringWheel.on('pointerup', this.handleSteerUp, this);

    // this.gas.on('pointerdown', this.handleGasDown, this);
    // this.gas.on('pointermove', this.handleGasMove, this);
    // this.gas.on('pointerup', this.handleGasUp, this);

    // this.break.on('pointerdown', this.handleBreakDown, this);
    // this.break.on('pointermove', this.handleBreakMove, this);
    // this.break.on('pointerup', this.handleBreakUp, this);

// this.createMesh3();
	

  }

  handleSteerDown(e) {
    if(this.steerTwin != undefined){
       this.steerTwin.stop();
    }
    let x = this.steeringWheel.getCenter().x
    let y = this.steeringWheel.getCenter().y
    this.prevRad = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(e.x,e.y , x,y ));
    this.steerPtr = e.id;
    this.input.on('pointermove', this.handleSteerMove, this);
    this.input.on('pointerup', this.handleSteerUp, this);
  }
  
  handleSteerMove(e) {
    if (this.steerPtr == e.id) {
      let x = this.steeringWheel.getCenter().x
      let y = this.steeringWheel.getCenter().y
      this.rad = Phaser.Math.RadToDeg(Phaser.Math.Angle.Between(e.x,e.y , x,y ));

      if (this.prevRad < 0 && this.rad > 0) {
         this.ang-= Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else if (this.prevRad > 0 && this.rad < 0) {
        this.ang += Math.abs(Math.abs(this.rad) - Math.abs(this.prevRad));
      } else {
        this.ang += this.rad - this.prevRad;
      }
      this.steeringWheel.angle = this.ang;
      this.prevRad = this.rad;

    }
  }

  handleSteerUp(e) {
    if (this.steerPtr == e.id) {
      this.input.off('pointermove')
      this.steerPtr = null;
      this.steerTwin = this.tweens.addCounter({
        from: this.ang,
        to: 0,
        duration: Math.abs(this.ang * this.steerSpeed),
        repeat: 0,
        ease: Phaser.Math.Easing.Quadratic.Out,
        onUpdate: (tween) => 
        {
            this.ang = tween.getValue()
            this.steeringWheel.setAngle( tween.getValue());
        },
        
    });
    }
  }

  handleGasDown(e) {
    
  }
  handleGasMove(e) {

  }
  handleGasUp(e) {

  }
  handleBreakDown(e) {

  }
  handleBreakMove(e) {

  }
  handleBreakUp(e) {

  }
  public scaleToGameW(obj, per) {
    obj.displayWidth = Number(this.sys.game.config.width) * per;
    obj.scaleY = obj.scaleX;
  }
  setPos(obj, x: number, y: number) {
    obj.setPosition(Number(this.sys.game.config.width) * x, Number(this.sys.game.config.height) * y);
  }

  createMesh3(){
    this.add.image(400, 300, 'bg');
    const uvs = [
      0, 0,
      1, 0,
      0, 1,
      1, 1
  ];
        const mesh = this.add.mesh(100, 100, 'skull');
        // mesh.scale = 0.05
        // mesh.panZ(7);
    
        mesh.addVerticesFromObj('skull', 1);
        mesh.modelRotation.x  = 1.45147308
        mesh.modelRotation.y = -0.142098
        mesh.panZ(118)
        mesh.panX(15.90055066518034)
        mesh.panY( 19.428080742210447)
        // mesh.modelRotation.y += 0.5;

        this.debug = this.add.graphics();

        this.add.text(16, 16, 'Rotate with mouse (+ Shift to pan)\nWheel to zoom\nD to toggle debug');

        this.input.keyboard.on('keydown-D', () => {

            if (mesh.debugCallback)
            {
                mesh.setDebug();
            }
            else
            {
                mesh.setDebug(this.debug);
            }

        });

        const rotateRate = 1;
        const panRate = 1;
        let a = 0;
        let b = 0;
        const zoomRate = 9;
        let xuplim = 2.08;
        let xlowlim = 1.4;
         this.input.on('pointermove', pointer => {
            console.log(pointer)
            if (!pointer.isDown)
            {
                return;
            }

            if (!pointer.event.shiftKey)
            {
                let val = pointer.velocity.y * (rotateRate / 600);
                let ldiff = xlowlim - mesh.modelRotation.x;
                let udiff = xuplim - mesh.modelRotation.x;
                if( ldiff < val && udiff > val ) {
                  mesh.modelRotation.x += val;
                }
            }
        });
    }
  
  createMesh ()
  {
      this.add.image(400, 300, 'bg').setFlip(false, true);

      const vertices = [
          -1, 1,
          1, 1,
          -1, -1,
          1, -1
      ];

      const uvs = [
          0, 0,
          1, 0,
          0, 1,
          1, 1
      ];

      const indicies = [ 0, 2, 1, 2, 3, 1 ];

      const mesh = this.add.mesh(400, 300, 'gas');

      mesh.addVertices(vertices, uvs, indicies);
      mesh.angle = -180
      
      mesh.panZ(7);

      this.debug = this.add.graphics();

      mesh.setDebug(this.debug);

      this.add.text(16, 16, 'Rotate with mouse (+ Shift to pan)\nWheel to zoom\nD to toggle debug');

      this.input.keyboard.on('keydown-D', () => {

          if (mesh.debugCallback)
          {
              mesh.setDebug();
          }
          else
          {
              mesh.setDebug(this.debug);
          }

      });

      const rotateRate = 1;
      const panRate = 1;
      const zoomRate = 4;

      this.input.on('pointermove', pointer => {

          if (!pointer.isDown)
          {
              return;
          }

          if (!pointer.event.shiftKey)
          {
              // mesh.modelRotation.y += pointer.velocity.x * (rotateRate / 800);
              mesh.modelRotation.x += pointer.velocity.y * (rotateRate / 600);
          }
          else
          {
              mesh.panX(pointer.velocity.x * (panRate / 800));
              mesh.panY(pointer.velocity.y * (panRate / 600));
          }

      });

      this.input.on('wheel', (pointer, over, deltaX, deltaY, deltaZ) => {

          mesh.panZ(deltaY * (zoomRate / 600));

      });
  }

  update(time: number, delta: number): void {
    // this.debug.clear();
    // this.debug.
  }

  
}