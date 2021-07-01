import React from "react";
import { View, Text } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const TrainingScreen = () => {
  return (
    <SafeArea style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Practice Mode: Intervals</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Music Notation goes here</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text>Play exercise</Text>
        <Text>Compare to solution</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text>Sharp</Text>
        <Text>In Tune</Text>
        <Text>Flat</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Submit</Text>
      </View>
    </SafeArea>
  );
};
