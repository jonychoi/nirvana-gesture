import React from 'react';
import Webcam from "react-webcam";

export const PoseCanvas = ({webcamRef, canvasRef}) => {
    return (
        <div className="posecanvas" style={{transform: 'scale(-1, 1)', height: 480 / 1.7}}>
            <Webcam ref={webcamRef}
                style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 10,
                width: 640 / 1.7, 
                height: 480 / 1.7,
                }}
            />
            <canvas ref={canvasRef}
                style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 10,
                width: 640 / 1.7, 
                height: 480 / 1.7,
                }}
            />
        </div>
    )
}

export default PoseCanvas;