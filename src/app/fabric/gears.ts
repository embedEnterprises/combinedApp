import { fabric } from 'fabric';

export class Gears {
  trackBack: any;
  track: any;
  knob: any;
  knobScale: any = 2;
  knobRad: any = 31.75 * this.knobScale;

  trackPath: string = "m 100 100 c 0 -10 10 -10 10 0 l 0 " +
    "17 c 0 10 10 10 10 0 l 0 -17 c 0 -10 10 -10 10 0 l 0 60 c 0 10" +
    "-10 10 -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 17 c 0 10 -10 10" +
    " -10 0 l 0 -17 c 0 -10 -10 -10 -10 0 l 0 17 c 0 10 -10 10 -10 0 l" +
    " 0 -60 c 0 -10 10 -10 10 0 l 0 17 c 0 10 10 10 10 0 l 0 -17";
  trackOptions: any = {
    stroke: 'red',
    strokeWidth: 0,
    fill: true,
    top: 200,
    left: 400,
    perPixelTargetFind: true,
    scaleX: 5,
    scaleY: 4,
    height: 75,
    width: 50,
    selectable: false,
  }
  h: any = (this.trackOptions.height * this.trackOptions.scaleY / 2 - 5 * this.trackOptions.scaleY) / 2;
  trackDims: any = {
    width: this.trackOptions.width * this.trackOptions.scaleX,
    height: this.trackOptions.height * this.trackOptions.scaleY,
    center: {
      x: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX / 2,
      y: this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2
    },
    first: {
      l: this.trackOptions.left,
      t: this.trackOptions.top,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    second: {
      l: this.trackOptions.left,
      t: this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2 + 5 * this.trackOptions.scaleY + this.h,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    third: {
      l: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX / 2 - 5 * this.trackOptions.scaleX,
      t: this.trackOptions.top,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    fourth: {
      l: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX / 2 - 5 * this.trackOptions.scaleX,
      t: this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2 + 5 * this.trackOptions.scaleY + this.h,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    fifth: {
      l: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX - 10 * this.trackOptions.scaleX,
      t: this.trackOptions.top,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    reverse: {
      l: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX - 10 * this.trackOptions.scaleX,
      t: this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2 + 5 * this.trackOptions.scaleY + this.h,
      w: 10 * this.trackOptions.scaleX,
      h: this.h
    },
    neutral: {
      l: this.trackOptions.left + this.trackOptions.width * this.trackOptions.scaleX / 2 - 5 * this.trackOptions.scaleX,
      t: this.trackOptions.top + this.trackOptions.height * this.trackOptions.scaleY / 2 - 5 * this.trackOptions.scaleY,
      w: 10 * this.trackOptions.scaleX,
      h: 10 * this.trackOptions.scaleY
    },
  };
  knobOptions: any = {
    left: this.trackDims.center.x - this.knobRad,
    top: this.trackDims.center.y - this.knobRad,
    scaleX: this.knobScale,
    scaleY: this.knobScale,
    perPixelTargetFind: true,
    lockMovementX: false,
    lockMovementY: false,
    selectable: true,
    evented: false
  }
  paths: any = {
    0: this.getRect(this.trackDims.neutral),
    1: this.getRect(this.trackDims.first),
    2: this.getRect(this.trackDims.second),
    3: this.getRect(this.trackDims.third),
    4: this.getRect(this.trackDims.fourth),
    5: this.getRect(this.trackDims.fifth),
    6: this.getRect(this.trackDims.reverse),
  }

  constructor(public canvas) {
    this.track = new fabric.Path(this.trackPath, this.trackOptions);
    var group = [];
    canvas.add(this.track);
    fabric.loadSVGFromURL("assets/gear_knob.svg", (objects, options) => {
      var loadedObjects = new fabric.Group(group);
      loadedObjects.set(this.knobOptions);
      canvas.add(loadedObjects);
      this.knob = loadedObjects
      canvas.renderAll();

    }, function (item, object) {
      object.set('id', item.getAttribute('id'));
      group.push(object);
    });
    this.track.on('mousedown', (event) => {
      if (this.knob.containsPoint(this.canvas.getPointer(event.e))) {
        this.track.on('mousemove', (event) => {
          if (!canvas.isTargetTransparent(this.track, event.e.x, event.e.y)) {
            let ptr = this.canvas.getPointer(event.e)
            let m = Object.keys(this.paths).find((key) => {
              return this.paths[key].containsPoint(ptr);
            })
            if (m != undefined) {
              let a = this.paths[m].getCenterPoint();
              this.knob.setPositionByOrigin(a, 'center', 'center');
            } else {
              this.knob.left = ptr.x - this.knobRad;
              this.knob.top = ptr.y - this.knobRad;
            }
            this.canvas.renderAll();
          }
        }
        )
      }
    });
    canvas.on('mouse:up', (event) => {
      this.knob.setCoords();
      this.track.off('mousemove')
    })
  }

  public getRect(a) {
    var a = new fabric.Rect({
      width: a.w,
      height: a.h,
      left: a.l,
      top: a.t,
      visible: false
    });
    this.canvas.add(a);
    return a;
  }
}