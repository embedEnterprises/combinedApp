import { ElementRef, Renderer2, ViewChild } from "@angular/core";
import { fabric } from 'fabric';

export class GearShift {
  // private canvas;
  private pathString = "m 100 100 c 0 -10 10 -10 10 0 l 0 17 c 0 10 10 10 10 0 l 0 -17 c 0 -10 10 "+
                        "-10 10 0 l 0 60 c 0 10 -10 10 -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 "+
                        "17 c 0 10 -10 10 -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 17 c 0 10 -10 10 -10 "+
                        "0 l 0 -60 c 0 -10 10 -10 10 0 l 0 17 c 0 10 10 10 10 0 l 0 -17";
  private path;
  constructor(private ctx: CanvasRenderingContext2D,
    private renderer2: Renderer2,
    private document: any,
    private canvas:any) {
    // this.canvas = new fabric.Canvas('canv');
    console.log("gear shoft");
    this.path = new fabric.Path(this.pathString, {
      stroke: 'red',
      strokeWidth: 5,
      fill: true,
      top: 10,
      left: 10,
      width: 100,
      height: 200,
      perPixelTargetFind: true
    });

    this.path.on('mousemove', function (options) {
      console.log(this.path.containsPoint(new fabric.Point(options.e.screenX, options.e.screenY)) + "    " + options.e.screenX);
    });

    this.path.on('mouseout', function (options) {
      console.log("out");
    });
    this.canvas.add(this.path);
    
  }


  public calculatePos(wt, ht) {

  }

  public isClicked(e) {
    // var x = e.pageX;
    // var y = e.pageY;
    // if (this.ctx.isPointInPath(this.path, x, y)) {
    //   console.log("the point is in gear knob");
    // } else {
    //   console.log("not clicked - ", x, " jjd - ", y, "   evnet -", e);
    // }
  }
  public draw() {
    this.canvas.add(this.path);
  }
}