// import p5, {Vector} from "p5"
import Matter from "matter-js"
const p5  = typeof window !== 'undefined' ? require('p5') : null

// const Engine = Matter.Engine;
        
        // // const Render = Matter.Render;
        // // const Runner = Matter.Runner;
        

export class images {
    constructor({ndx,imgsRatio,clickCount,world,p, Bodies, World}) {
      this.positions = [];
      this.ndx = ndx;
      this.p = p;
      this.Bodies = Bodies;
    //   console.log(this.p);
      this.World = World;
      this.currentWidth = this.p.random(10, 25);
      this.currentHeight = this.currentWidth * imgsRatio[this.ndx];
      this.endWidth = this.p.random(this.p.windowWidth / 15, this.p.windowWidth / 7);
    // console.log(this.endWidth);
      this.endHeight = this.endWidth * imgsRatio[this.ndx];
      this.xpos = this.p.random(this.endWidth / 4, this.p.width - this.endWidth / 4);
      this.ypos = this.p.random(this.p.width / 8);
      this.positions.push(new p5.Vector(this.xpos, this.ypos));
      this.currentVelocity = this.p.random(0.5, 2);
      this.distFromCentre = this.p.abs(this.p.width / 2 - (this.xpos - this.endWidth / 2));
      this.stop_y_offset = (this.p.height / 5 * (1 - (this.distFromCentre / (this.p.width / 2)))) * this.p.random(0.75, 0.95);
  
      if (clickCount < 10) {
        this.click_offset = 0.98;
      } else {
        this.click_offset = 0.98 * (clickCount / 5);
      }
      this.stop_y = this.p.random(this.p.height - this.stop_y_offset - this.endHeight / 2, this.p.height - this.endHeight / 2 - (this.stop_y_offset / this.click_offset));
      this.prog = 0;
      this.velocityDelta = 0;
      this.options = {
        frictionAir: 0.05,
        density: this.p.random(0.4, 0.9),
        restitution: this.p.random(0.02, 0.5)
        // isSensor: true
      }
      // console.log (this.xpos, this.ypos, this.endHeight);
      this.imgBody = this.Bodies.circle(this.xpos, this.ypos, this.endHeight / 6, this.options);
      this.World.add(world, this.imgBody);
      this.reachedPlace = false;
  
  
    }
    appear(imgsRatio) {
      this.prog = this.ypos / this.stop_y;
      if (this.ypos <= 0) {
        this.prog = 0;
      }
      this.velocityDelta += this.prog * 0.01;
      this.newVelocity = this.currentVelocity + this.velocityDelta;
      this.currentWidth += this.newVelocity;
      this.currentHeight += this.newVelocity * imgsRatio[this.ndx];
    }
  
    display(imgsRatio,originalImages,currentCanvas) {
      if (this.currentWidth < this.endWidth) {
        this.appear(imgsRatio);
      }
      if (this.imgBody.position.y >= this.stop_y && !this.reachedPlace) {
        this.reachedPlace = true;
        Matter.Sleeping.set(this.imgBody, true);
      }
  
  
      if (this.imgBody.position.y >= this.stop_y && this.reachedPlace && !this.imgBody.isSleeping)
        // && this.imgBody.position.y < this.stop_y + (this.newVelocity * 3)) 
        {
        this.currentWidth += this.newVelocity/4;
      this.currentHeight += this.newVelocity/4 * imgsRatio[this.ndx];
        // console.log(this.newVelocity);
      }
      this.displayVec = this.imgBody.position;
      this.displayAngle = this.imgBody.angle;
      this.p.push();
      this.p.translate(this.displayVec.x, this.displayVec.y);
      this.p.rotate(this.displayAngle);
      this.p.image(originalImages[this.ndx], 0, 0, this.currentWidth, this.currentHeight);
    //   , this.currentWidth/10, this.currentHeight/10);
      // rect(0,0, this.imgBody.area/this.currentHeight,this.imgBody.area/this.currentWidth);
      this.p.pop();
      this.endButtom = this.imgBody.position.y + this.currentHeight / 2;
      this.p.noFill();
      this.p.rectMode(p5.CENTER);
      this.p.strokeWeight(1);
  
    }
  }