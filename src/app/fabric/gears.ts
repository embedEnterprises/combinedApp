import { fabric } from 'fabric';

export class Gears {
  trackBack: any;
  track: any;
  knob: any;
  rad: any = 25;
  trackPath:string = "m 100 100 c 0 -10 10 -10 10 0 l 0 "+
  "17 c 0 10 10 10 10 0 l 0 -17 c 0 -10 10 -10 10 0 l 0 60 c 0 10"+
   "-10 10 -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 17 c 0 10 -10 10"+
   " -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 17 c 0 10 -10 10 -10 0 l"+
   " 0 -60 c 0 -10 10 -10 10 0 l 0 17 c 0 10 10 10 10 0 l 0 -17";
  trackOptions: any = {
    stroke: 'red',
    strokeWidth: 0,
    fill: true,
    top: 200,
    left: 400,
    perPixelTargetFind: true,
    scaleX: 5,
    scaleY: 5,
    height: 75,
    width: 50,
    selectable: false,
  }
  trackDims: any = {
    width: this.trackOptions.width * this.trackOptions.scaleX,
    height: this.trackOptions.height * this.trackOptions.scaleY,
    center:{
      x:this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX / 2,
      y:this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2
    },
    
  };
  knobOptions:any ={
    radius: this.rad,
    fill: "blue",
    stroke: "white",
    left: this.trackDims.center.x - this.rad,
    top: this.trackDims.center.y - this.rad,
    perPixelTargetFind: true,
    lockMovementX: false,
    lockMovementY: false,
    selectable: false,
    evented : false
  }
  
  constructor(public canvas) {
    this.track = new fabric.Path(this.trackPath, this.trackOptions);
    this.knob = new fabric.Circle(this.knobOptions);
    this.canvas.add(this.track);
    this.canvas.add(this.knob);
    this.track.on('mousemove' , (event)=> {
      if(!this.canvas.isTargetTransparent(this.track, event.e.x, event.e.y)){
        let ptr = this.canvas.getPointer(event.e);
        this.knob.left = ptr.x - this.rad;
        this.knob.top = ptr.y- this.rad;
        this.canvas.renderAll();
      }
    });
  }
}



















