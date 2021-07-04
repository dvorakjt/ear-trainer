import React from "react";
import { View } from "react-native";
import { useTheme } from "native-base";

export const Spacer = ({ children }) => {
  const spacing = useTheme().space;
  return <View style={{ padding: 10 }}>{children}</View>;
};
