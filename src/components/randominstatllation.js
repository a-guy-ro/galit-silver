import React, {useEffect, useRef} from "react"
import Matter from "matter-js"
import {images} from "./random_installation_comp/images.js"
import {stageDraw, stageDisplay}  from "./random_installation_comp/stage.js"
import img1 from "./random_installation_comp/assets/clay.png"
import img2 from "./random_installation_comp/assets/cutbby.png"
import img3 from "./random_installation_comp/assets/floatingHead.png"
import img4 from "./random_installation_comp/assets/hanged.png"
import img5 from "./random_installation_comp/assets/pillowtalk.png"
import img6 from "./random_installation_comp/assets/projection.png"
// import img7 from "./random_installation_comp/assets/rope.png"
import img8 from "./random_installation_comp/assets/sleeping.png"
import img9 from "./random_installation_comp/assets/tfuCeramics.png"
import img10 from "./random_installation_comp/assets/tfuCeramics2.png"

const P5 = typeof window !== 'undefined' ? require ('p5') : null
// if (typeof window !== 'undefined') {
//   import P5 from "p5"
// }
// let img10;
// fetch("./random_installation_comp/assets/tfuCeramics2.png").then(image=> img10 =image);
export default function RandomInstallation () {
    const p5Canvas = useRef(null);
    console.log(p5Canvas);
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    let engine;
    let world;
    let runner;
    let render;

    const Sketch = (p) => {

        let originalImages = [];
        let imgsRatio = [];
        let exhibitImages = [];
        // let indx = 0;
        let bgColour;
        let opcty = 60;
        let fps = 60;
        let clickCount = 0;
        let xoffset = 0.0;
        let stageOffset = 0.2;
        // let imgBodies = [];
        let thisCanvas,stageGraphics;
        // const relativePath = './src/components/random_installation_comp/assets'
        const loaded = (img)=>{
            console.log(`loaded image ${img}`);
            // img.resize(p.random(50,100),0);
        }
        const  failedLoad = (err) => {
            console.error(err);
        }
        
        p.preload = () => {
        let img = p.loadImage(img1, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          img = p.loadImage(img2, (img)=>loaded(img),(err)=>failedLoad(err))
          originalImages.push(img);
          img = p.loadImage(img3, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          img = p.loadImage(img4, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          img = p.loadImage(img5, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          img = p.loadImage(img6, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          // img = p.loadImage(img7, (img)=>loaded(img),(err)=>failedLoad(err));
          // originalImages.push(img);
          img = p.loadImage(img8, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
          img = p.loadImage(img9, (img)=>loaded(img),(err)=>failedLoad(err));
          originalImages.push(img);
            img = p.loadImage(img10, (img)=>loaded(img),(err)=>failedLoad(err));
            originalImages.push(img);
      
          
          // console.log(originalImages.length);
        }
        
        p.setup = () => {
          thisCanvas = p.createCanvas(p5Canvas.current.offsetWidth, p5Canvas.current.offsetHeight);
          const canvasElement  = document.querySelector('.p5Canvas');
          // console.log(canvasElement);
          // console.log(p5Canvas);

          // console.log(thisCanvas);
          stageGraphics  = p.createGraphics (thisCanvas.width, thisCanvas.height);
          // console.log(stageGraphics);
          p.frameRate(fps);
          p.imageMode(p.CENTER);
          p.colorMode(p.HSB, 360, 100, 100, 255);
          bgColour = p.color(5);
          bgColour.setAlpha(opcty);
          let strokeColour = p.color(132, 70, 85, 255);
          // console.log(strokeColour);
          p.background(bgColour);
          p.stroke(strokeColour);
          matterSetup();
          ratioCalc();
          stageDraw(stageOffset,clickCount,exhibitImages.length,p);
        //   canvasElement.removeEventListener('click',()=>'');
        // canvasElement.addEventListener('click', ()=>mousePressedForCanvas,false);
        // // e =>{
        // //     mousePressedForCanvas();
        // //     console.log(e);
        // // });
        //   canvasElement.style.zIndex = '-5';
        //   canvasElement.style.position = 'fixed';
        //   console.log(canvasElement);
        }
        
        const rend = () =>  {
            
            exhibitImages.sort((a, b) => (a.imgBody.position.y > b.imgBody.position.y) ? 1 : -1);
          stageDisplay(stageOffset,clickCount,exhibitImages.length,bgColour, p);
          Engine.update(engine);
          for (let i = 0; i < exhibitImages.length; i++) {
            exhibitImages[i].display(imgsRatio,originalImages,thisCanvas);
          }
          requestAnimationFrame(() => rend());
        }
        
        
        p.mousePressed = () => {
          // stageDraw();
          if (p5Canvas.current !==  null) {
          if (imgsRatio !== null) {  
          clickCount++;
          anotherImage();
        }
        return false; 
        } else {
        return ''
    }
    }
        
        p.touchReleased = () =>{
            if (p5Canvas.current!==null) {
                // console.log(document.querySelector('.p5Canvas'));
                if (imgsRatio !== null) {  
                clickCount++;
                anotherImage();
              }
              return false; 
              } else {
              return ''
          }
        }
    
        
        const anotherImage = () => {
          let imgNdx = p.floor(p.random(0, originalImages.length));
          if (imgNdx === originalImages.length) {
            imgNdx = originalImages.length - 1;
          }
          xoffset += fps;
          let currentProps = {
            ndx:imgNdx,
            imgsRatio:imgsRatio,
            clickCount:clickCount,
            world:world,
            p: p,
            Bodies: Bodies,
            World: World
          }
          let exhibitedImg = new images(currentProps);
          exhibitImages.push(exhibitedImg);
          if (exhibitImages.length === 1) {
            rend();
          }
        }
        
        const ratioCalc = () => {
          for (let i = 0; i < originalImages.length; i++) {
            originalImages[i].loadPixels();
            let currentRatio = originalImages[i].height / originalImages[i].width;
            imgsRatio.push(currentRatio);
            originalImages[i].updatePixels();
          }
          // for (let i = 0; i < imgsRatio.length; i++) {
          //   console.log('ratio for img no. ' + (i + 1) + ': ' + imgsRatio[i]);
          // }
        }
        // p.windowResized = () => {
        //     if (p5Canvas.current) {
                
        //         p.resizeCanvas(p5Canvas.current.offsetWidth, p5Canvas.current.offsetHeight); 
        //         stageDraw(stageOffset,clickCount,exhibitImages.length,p);
        //     }
        // }
}

const matterSetup = () => {
    engine = Engine.create({
      enableSleeping: true,
      timing: {
        timeScale: 0.5
      },
      options: {
        width: p5Canvas.current.offsetWidth,
        height: p5Canvas.current.offsetHeight,
      }
    });
    world = engine.world;
    render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: p5Canvas.current.offsetWidth,
        height: p5Canvas.current.offsetHeight,
        wireframes: false
      }
    });
    runner = Runner.create();
    Runner.run(runner, engine);
    let options = {
      isStatic: true
    };
    let ground = Bodies.rectangle(p5Canvas.current.offsetWidth / 2, p5Canvas.current.offsetHeight, p5Canvas.current.offsetWidth, 120, options);
    World.add(world, ground);
  }

  const matterReset = () => {
      console.log('clearing  matter js!');
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
  }

     useEffect(() =>{
         let isMouted = true;
         new P5 (Sketch,p5Canvas.current);
         if (!isMouted) {
          matterReset();
          p5Canvas.current  = null;
         }
         return ()=> {
             matterReset();
             p5Canvas.current  = null;
             isMouted = false;
            //  console.log(p5Canvas);
         }
     },[])

     if (typeof window === 'undefined') {
       return (<></>)
     } else {
     return (
         <div  className="container" style= {{position:'absolute', width:'100%', height:'88%', top:'18%', left:'0'}}>
         <div style  = {{height:'100%',position:'relative', minHeight:`${0.75*window.innerHeight}px`}} ref={p5Canvas}>
             {/* {children} */}
         </div>
         </div>
     )
    // return (
    //   <></>
    // )
    
}
}

