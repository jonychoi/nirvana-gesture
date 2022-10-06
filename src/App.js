import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import PoseCanvas from './components/posecanvas';
import './styles/App.css';
import {detect} from './detector';
import Scroller from './components/scroller';

function App() {
  const [gesture, setGesture] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const runNirvanaPose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded');
    setIsLoaded(true)
    
    setInterval(() => {
      detect(net, webcamRef, canvasRef, setGesture);
    }, 100);
  };
  
  useEffect(() => {runNirvanaPose()}, [])
  return (
    <div className="App">
      <Scroller gesture={gesture} isLoaded={isLoaded} />
      <PoseCanvas webcamRef={webcamRef} canvasRef={canvasRef} />
    </div>
  );
}

export default App;
