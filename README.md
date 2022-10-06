# nirvana-gesture
Hand Position Gesture Recognition based on Tensorflow.js with React.js

## Overview
Your webcam detect your pose!
You can scroll the movie posters horizontally with your hand gesture.

## Architecture

This app is based on Javascript solution of ML Pipeline.
See Details at https://google.github.io/mediapipe/

#### MediaPipe Hands: Hand Landmark Model

After the palm detection over the whole image our subsequent hand landmark model performs precise keypoint localization of 21 3D hand-knuckle coordinates inside the detected hand regions via regression, that is direct coordinate prediction. The model learns a consistent internal hand pose representation and is robust even to partially visible hands and self-occlusions.

To obtain ground truth data, we have manually annotated ~30K real-world images with 21 3D coordinates, as shown below (we take Z-value from image depth map, if it exists per corresponding coordinate). To better cover the possible hand poses and provide additional supervision on the nature of hand geometry, we also render a high-quality synthetic hand model over various backgrounds and map it to the corresponding 3D coordinates.

![image]("https://github.com/jonychoi/nirvana-gesture/blob/main/src/images/hand_crops.png")
![image]("https://github.com/jonychoi/nirvana-gesture/blob/main/src/images/hand_landmarks.png")