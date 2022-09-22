import { Renderer2 } from "@angular/core";
var
  x = 85,
  y = 5,
  l = 10,
  h = 1.5,
  r = 1,
  posX = 0,
  posY = 0,
  length = 0,
  height = 0,
  radius = 0,
  w1 = 0,
  h1 = 0,
  hp = 0.20,
  vp = 0.40,
  hpad = 0,
  vpad = 0,
  barSlot = 0,
  first=true


export class HealthBar {

  private value;
  private path = new Path2D();
  constructor(private ctx: CanvasRenderingContext2D,
    private renderer2: Renderer2) {
    this.value = 0;
  }

  public update(val) {
    this.value = val;
  }
  public calculatePos(wt, ht) {
    posX = x * wt / 100;
    posY = y * ht / 100;
    length = l * wt / 100;
    height = h * ht / 100;
    radius = r * wt / 100;
    barSlot = (length)/5;
    hpad = barSlot*hp;
    vpad = height*vp;
    w1 = (barSlot*(1-hp*2)) ;
    h1 = height - vpad*2;

    console.log({barSlot , hpad , vpad , w1, h1 , length  , radius , height});
  }
  public draw() {
    // this.ctx.beginPath();
    // this.ctx.moveTo(posX, posY);

    // this.ctx.lineTo(posX + length, posY);
    // this.ctx.arcTo(posX + length + radius, posY, posX + length + radius, posY + radius, radius);
    // this.ctx.arcTo(posX + length + radius, posY + height + radius, posX + length, posY + height + radius, radius);

    // this.ctx.lineTo(posX, posY + height + radius);

    // this.ctx.arcTo(posX - radius, posY + height + radius, posX - radius, posY + height - radius, radius);
    // this.ctx.arcTo(posX - radius, posY, posX, posY, radius);
    // this.ctx.closePath(); 

    this.ctx.beginPath();
    this.path.moveTo(posX, posY);

    this.path.lineTo(posX + length, posY);
    this.path.arcTo(posX + length + radius, posY, posX + length + radius, posY + radius, radius);
    this.path.arcTo(posX + length + radius, posY + height + radius, posX + length, posY + height + radius, radius);

    this.path.lineTo(posX, posY + height + radius);

    this.path.arcTo(posX - radius, posY + height + radius, posX - radius, posY + height - radius, radius);
    this.path.arcTo(posX - radius, posY, posX, posY, radius);
    this.path.closePath(); 
    var strokeGrad = this.ctx.createLinearGradient(posX, posY, posX+length, posY+height);
    strokeGrad.addColorStop(0, "rgba(1, 27, 69 , 1)");
    strokeGrad.addColorStop(1, "grey");
    this.ctx.strokeStyle = strokeGrad;

    var fillGrad = this.ctx.createLinearGradient(posX, posY, posX+length, posY+height);
    fillGrad.addColorStop(0, "rgba(153, 124, 196, 1)");
    fillGrad.addColorStop(1, "grey");
    // my_gradient.addColorS/top(1, "grey");
    this.ctx.fillStyle = fillGrad;
    this.ctx.fill(this.path);
    this.ctx.fillStyle = "rgba(0, 0, 128,1)";
    for(let i=0;i<5;i++){
      this.drawBar(i);
    }
    first = false;
    // this.ctx.stroke(this.path);
  }

  private drawBar(n){
    this.ctx.fillRect(posX + n*barSlot, posY+vpad, w1, h1+this.ctx.lineWidth*2);
    if(first){
    console.log(posX + n*(hpad*3+w1));
    console.log({posX , length});
    }
  }


}