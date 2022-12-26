import { fabric } from 'fabric';

export class Steering {
  steering: any;
  rotationPerDegree: number = 8.5;
  dir = true;
  stopAnimation = false
  steerOptions: any = {
    left: 580,
    top: 700,
    scaleX: 5,
    scaleY: 5,
    perPixelTargetFind: true,
    selectable: false,
    evented: true,
    centeredRotation: true,
    originX: 'center',
    originY: 'center',
    lockMovementY: true,
    lockMovementX: true,
    hasControls: false,

  };
  constructor(public canvas) {
    var group = [];
    fabric.loadSVGFromURL('https://upload.wikimedia.org/wikipedia/commons/7/7b/Steering-wheel.svg', (objects, options) => {
      this.steering = new fabric.Group(group);
      this.steering.set(this.steerOptions);
      this.steering.on('mousedown', (event) => {
        this.stopAnimation = true
        var ptr = canvas.getPointer(event.e);
        var x = ptr.x;
        var y = ptr.y;
        var prevRad = Math.atan2(ptr.y - this.steerOptions.top, ptr.x - this.steerOptions.left) * 180 / Math.PI;
        var rad;

        this.canvas.on('mouse:move', (event) => {
          ptr = canvas.getPointer(event.e);
          rad = Math.atan2(ptr.y - this.steerOptions.top, ptr.x - this.steerOptions.left) * 180 / Math.PI;
          if (prevRad < 0 && rad > 0) {
            this.steering.angle -= Math.abs(Math.abs(rad) - Math.abs(prevRad));
          } else if (prevRad > 0 && rad < 0) {
            this.steering.angle += Math.abs(Math.abs(rad) - Math.abs(prevRad));
          } else {
            this.steering.angle += rad - prevRad;
          }
          prevRad = rad;
          this.steering.setCoords();
          this.canvas.renderAll();
        })

        this.canvas.on('mouse:up', (event) => {
          this.canvas.off("mouse:move");
          this.canvas.off("mouse:up");
          this.stopAnimation = false;
          this.steering.animate('angle', this.steering.angle > 0 ? 0 : -0, {
            duration: this.rotationPerDegree * Math.abs(this.steering.angle),
            onChange: this.canvas.renderAll.bind(this.canvas),// this onchange method reduces performance, we can use request animatin frame function
            onComplete: () => { this.dir = true },
            abort: () => this.stopAnimation,
            easing: fabric.util.ease['easeOutQuad']
          });
        })
      })
      canvas.add(this.steering);
      canvas.renderAll();
    }, (item, object) => {
      object.set('id', item.getAttribute('id'));
      group.push(object);
    });
  }
}