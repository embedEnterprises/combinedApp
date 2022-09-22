import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { fabric } from 'fabric';
import { Dashboard } from '../cruise/dashboard';
import { DeviceConfigurationService } from '../device-configuration.service';
import {Gears} from './gears';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent implements OnInit {

  canvas: any;
  dashboard: any;
  gears:any;
  canvasOptions:any ={
    controlsAboveOverlay:false, //Indicates whether object controls (borders/controls) are rendered above overlay image
    allowTouchScrolling:false, //Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
    enablePointerEvents:true, //When the option is enabled, PointerEvent is used instead of MouseEvent.
    fireMiddleClick:false,   //Indicates if the canvas can fire middle click events
    fireRightClick:false,   //Indicates if the canvas can fire right click events
    hoverCursor:"pointer", //Default cursor value used when hovering over an object on canvas
    isDrawingMode:false,  //When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
    // width:window.innerWidth,
    // height:window.innerHeight
    backgroundColor:"green"
  }
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', this.canvasOptions);
    this.setCanvasDimensions();
    this.gears = new Gears(this.canvas);
  }

  private setCanvasDimensions(){
    let canvasSize = {
      width: 1536,
      height: 754
   };

   let containerSize = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
   };

   let scaleRatio = Math.min(containerSize.width / canvasSize.width, containerSize.height / canvasSize.height);
   this.canvas.setWidth(containerSize.width);
   this.canvas.setHeight(containerSize.height);
   this.canvas.setZoom(scaleRatio*1)
  }
}


