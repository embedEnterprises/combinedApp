import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';
import { fabric } from 'fabric';
import { Dashboard } from '../cruise/dashboard';
import { DeviceConfigurationService } from '../device-configuration.service';
import {Gears} from './gears';
import { Steering } from './steering';
import { Pedals } from './Pedals';
// import * from '../../assets/fabric_with_touch'
@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent implements OnInit {

  canvas: any;
  c : any;
  dashboard: any;
  gears:any;
  pedals:any;
  canvasOptions:any ={
    controlsAboveOverlay:false, //Indicates whether object controls (borders/controls) are rendered above overlay image
    allowTouchScrolling:false, //Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
    enablePointerEvents:false, //When the option is enabled, PointerEvent is used instead of MouseEvent.
    fireMiddleClick:false,   //Indicates if the canvas can fire middle click events
    fireRightClick:false,   //Indicates if the canvas can fire right click events
    hoverCursor:"pointer", //Default cursor value used when hovering over an object on canvas
    isDrawingMode:false,  //When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
    // width:window.innerWidth,
    // height:window.innerHeight,
    backgroundColor:"green",
    selection:false,
    width:1536,
    height:754,
    enableTouchEvents:true,
    enableMSTouch:true
  }
  steering: Steering;
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', this.canvasOptions);
    this.c = document.getElementById("canvas");
    // this.resizeCanvas();
    this.setCanvasDimensions()
    // this.gears = new Gears(this.canvas);
    // this.steering = new Steering(this.canvas);
    // this.pedals = new Pedals(this.canvas);
    // this.canvas.on("pointer:move" , function(){
    //   console.log("mouse touch")
    // })
    // this.canvas.on("touch:start" , function(e){
    //   console.log(e);
    // })
    this.canvas.on("touch:gesture" , function(e){
      console.log("down-> "+ e);
    })
    this.canvas.on("pointer:move" , function(e){
      console.log("move> " + e.e.pointerId);
    })
    this.canvas.on("pointer:up" , function(e){
      console.log("up-> "+ e.e.pointerId);
    })
    
  }

  private resizeCanvas() {
    const outerCanvasContainer = document.getElementsByClassName('canvas-container')[0];//$('.fabric-canvas-wrapper')[0];
    
    const ratio = this.canvas.getWidth() / this.canvas.getHeight();
    const containerWidth   = outerCanvasContainer.clientWidth;
    const containerHeight  = outerCanvasContainer.clientHeight;

    const scale = containerWidth / this.canvas.getWidth();
    const zoom  = this.canvas.getZoom() * scale;
    this.canvas.setDimensions({width: containerWidth, height: containerWidth / ratio});
    this.canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    console.log(containerHeight , containerWidth , scale , zoom)
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
   console.log(containerSize);
   console.log(scaleRatio);
  }
}


