import p5 from "p5"
import * as dat from 'dat.gui';

console.log("Flash Experiment")

const gui = new dat.GUI();
const p5App = (p5_core) => {
  let color1 = null;
  let color2 = null;
  let counter = 0;
  let uiDataObj = {
    "frame rate": 40,
    "color1": '#FF0000',
    "color2": '#ffffff'
  };
  
  let controller = gui.addFolder('setting');
  gui.add(uiDataObj, 'frame rate', 10, 120).onChange((_frameRate)=>p5_core.frameRate(uiDataObj["frame rate"]*2));
  gui.addColor(uiDataObj, 'color1');
  gui.addColor(uiDataObj, 'color2');
  
  //initialize
  p5_core.setup = () => {
    p5_core.createCanvas(p5_core.windowWidth, p5_core.windowHeight);
    p5_core.frameRate(uiDataObj["frame rate"]*2);
    p5_core.background(uiDataObj["color1"]);
  }
  p5_core.draw = () => {
    if (counter%2==1) {
      p5_core.background(uiDataObj["color1"]);
      counter = 0
      return
    }
     p5_core.background(uiDataObj["color2"]);
     counter += 1
  }

}

const app = new p5(p5App);