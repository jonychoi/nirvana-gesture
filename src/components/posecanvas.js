import React from 'react';
import Webcam from "react-webcam";

export const PoseCanvas = ({webcamRef, canvasRef}) => {
    return (
        <div className="posecanvas">
            <Webcam ref={webcamRef}
                style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 10,
                width: 640, 
                height: 480,
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
                width: 640, 
                height: 480,
                }}
            />
        </div>
    )
}

export default PoseCanvas;