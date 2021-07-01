import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import { TrainingScreen } from "./src/features/training/screens/training-screen";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <TrainingScreen />
        <StatusBar />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
