import {drawHand} from "./utilities";
import * as fp from "fingerpose";
import { paperGesture } from "./gestures/paper";
import {rockGesture} from './gestures/rock';
import {leftGesture} from './gestures/left';
import {rightGesture} from './gestures/right';


export const detect = async (net, webcamRef, canvasRef, setGesutre) => {
    //check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height= videoHeight;

      //set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height= videoHeight;

      //make detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          leftGesture,
          rightGesture,
          rockGesture,
          paperGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          console.log(gesture.gestures[maxConfidence].name);
          setGesutre(gesture.gestures[maxConfidence].name);
        }
      }

      

      //draw mesh
      
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };