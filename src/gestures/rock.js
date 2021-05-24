// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

/*

thumb: [0, 1, 2, 3, 4],
indexFinger: [0, 5, 6, 7, 8],
middleFinger: [0, 9, 10, 11, 12],
ringFinger: [0, 13, 14, 15, 16],
pinky: [0, 17, 18, 19, 20],

*/

// Define Gesture Description
export const rockGesture = new GestureDescription('rock'); 

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1); 
    rockGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}