import { StyleSheet, ViewStyle, Text } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
interface Props {
  style?: ViewStyle;
}

export function ContentComponent({style}) {
  return (
    <Animated.View style={{...style,...styles.container}}>
      <Text>dafdfasfasf</Text>
      <Text>dafdfasfasf</Text>
      <Text>dafdfasfasf</Text>
      <Text>dafdfasfasf</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: "#DDDDDD",
  },
});
