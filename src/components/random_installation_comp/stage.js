// import P5, {width, height, Vector} from "p5"
const p5  = typeof window !== 'undefined' ? require('p5') : null


let outerCorners = [];
let innerCorners = [];
let stageLines = [];

export function stageDisplay(stageOffset,clickCount,exImagesLength,bgColour,p) {
    p.background(bgColour, 60);
    // console.log(p);
    // exhibitImages.sort((a, b) => (a.imgBody.position.y > b.imgBody.position.y) ? 1 : -1);
    stageDraw(stageOffset,clickCount,exImagesLength,p);
  }
  
  export function stageDraw(stageOffset,clickCount,exImagesLength, p) {
    let pace = 100;
    // console.log(p);
    if (clickCount === 0) { //calculating segments' vectors in the first run
      stageCornersVecs(stageOffset,p);
      for (let i = 0; i < outerCorners.length; i++) {
        drawingVecsConstructor(outerCorners[i], innerCorners[i], pace);
      }
      //inner rect drawer
      drawingVecsConstructor(innerCorners[0], innerCorners[1], pace);
      drawingVecsConstructor(innerCorners[0], innerCorners[3], pace);
      drawingVecsConstructor(innerCorners[2], innerCorners[1], pace);
      drawingVecsConstructor(innerCorners[2], innerCorners[3], pace);
  
    }
    for (let i = 0; i < stageLines.length; i++) { //perspective lines drawer
      if (i < 4) {
        lineDraw(stageLines[i], pace, true,exImagesLength,p);
      } else {
        lineDraw(stageLines[i], pace, false,exImagesLength,p);
      }
    }
  
  }
  
  function stageCornersVecs(stageOffset,p) {
    let topLeft = new p5.Vector (0, 0);
    let topRight = new p5.Vector(p.width, 0);
    let bottomRight = new p5.Vector(p.width, p.height);
    let bottomLeft = new p5.Vector(0, p.height);
    outerCorners.push(topLeft);
    outerCorners.push(topRight);
    outerCorners.push(bottomRight);
    outerCorners.push(bottomLeft);
    let innerTopLeft = new p5.Vector(p.width * stageOffset, p.height * stageOffset);
    let innerTopRight = new p5.Vector(p.width * (1 - stageOffset), p.height * stageOffset);
    let innerBottomRight = new p5.Vector(p.width * (1 - stageOffset), p.height * (1 - stageOffset));
    let innerBottomLeft = new p5.Vector(p.width * stageOffset, p.height * (1 - stageOffset));
    innerCorners.push(innerTopLeft);
    innerCorners.push(innerTopRight);
    innerCorners.push(innerBottomRight);
    innerCorners.push(innerBottomLeft);
  }
  
  function drawingVecsConstructor(startVec, endVec, totalFrames) {
    let vecs = [];
    // let leng = startVec.copy().dist(endVec);
    let progRatio = 1 / totalFrames;
    for (let i = 0; i <= totalFrames; i++) {
      vecs.push(startVec.copy().lerp(endVec, progRatio * i));
    }
    stageLines.push(vecs);
  }
  
  function lineDraw(vecs, totalFrames, differentialStroke,exImagesLength,p) {
    let segInd = 0;
    requestAnimationFrame(() => {
      segDraw(vecs, segInd, totalFrames, differentialStroke,exImagesLength,p);
      // for (let i = 0; i < exhibitImages.length; i++) {
      //   exhibitImages[i].display();
      // }
    });
  }
  
  function segDraw(vecs, i, pace, differentialStroke,exImagesLength,p) {
    //   console.log(p);
    if (differentialStroke) {
        p.strokeWeight((vecs.length - i) / 3);
    } else {
        p.strokeWeight(5);
    }
    p.line(vecs[i].x, vecs[i].y, vecs[i + 1].x, vecs[i + 1].y);
    if (i < vecs.length - 2) {
      if (exImagesLength === 0) {
        requestAnimationFrame(() => segDraw(vecs, i + 1, pace, differentialStroke,exImagesLength,p));
      } else {
        segDraw(vecs, i + 1, pace, differentialStroke,exImagesLength,p);
      }
    }
  }