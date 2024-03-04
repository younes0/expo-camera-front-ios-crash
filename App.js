import React from "react";
import { StyleSheet } from "react-native";
import { CameraView } from "expo-camera/next";

export default function App() {
  const cameraRef = React.useRef();

  return (
    <CameraView
      facing="front"
      ref={cameraRef}
      style={StyleSheet.absoluteFill}
    />
  );
}
