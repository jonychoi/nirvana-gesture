import {drawHand} from "./utilities";

export const detect = async (net, webcamRef, canvasRef) => {
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
      console.log(hand);
      

      //draw mesh
      
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };