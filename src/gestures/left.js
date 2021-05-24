// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const leftGesture = new GestureDescription('left'); 


for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    leftGesture.addCurl(finger, FingerCurl.NoCurl, .75); 
    leftGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.75)
    leftGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.75);
}