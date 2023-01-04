import React from "react";
import { TouchableOpacity, Text } from "react-native";

export function MapButton({style, onPressHandler}) {
  return (
    <TouchableOpacity
      style={{...{style}, ...{
        width: 70,
        height: 30,
        backgroundColor: "green",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}}

      onPress={onPressHandler}
    >
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
