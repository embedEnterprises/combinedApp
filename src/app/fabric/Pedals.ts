import {fabric} from 'fabric';

export class Pedals{
  break;
  gas;
  breakOpts:any = {
    left:230,
    top:400,
    scaleX:0.6,
    scaleY:0.6,
    selectable:false,
    evented:true,
    perPixelTargetFind: false,
    skewX : 5,
    skewY : 5

  };
  gasOpts:any = {
    left : 100,
    top:400,
    scaleX:0.6,
    scaleY:0.6,
    selectable:false,
    evented:true,
    perPixelTargetFind: false,
  };

  constructor(public canvas){
    var breakGroup = [];
    var gasGroup = [];
    fabric.loadSVGFromURL("assets/break.svg", (objects, options) => {
      this.break = new fabric.Group(breakGroup);
      this.break.set(this.breakOpts);
      canvas.add(this.break);
      canvas.renderAll();

    }, function (item, object) {
      object.set('id', item.getAttribute('id'));
      breakGroup.push(object);
    });

    fabric.loadSVGFromURL("assets/gas.svg", (objects, options) => {
      this.gas = new fabric.Group(gasGroup);
      this.gas.set(this.gasOpts);
      canvas.add(this.gas);
      canvas.renderAll();

    }, function (item, object) {
      object.set('id', item.getAttribute('id'));
      gasGroup.push(object);
    });


  }
}