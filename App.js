import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

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
