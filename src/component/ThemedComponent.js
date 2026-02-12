import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

export const ThemedView = ({ style, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[{ backgroundColor: theme.background, flex: 1 }, style]}>
      {children}
    </View>
  );
};

export const ThemedText = ({ style, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Text style={[{ color: theme.text }, style]}>
      {children}
    </Text>
  );
};