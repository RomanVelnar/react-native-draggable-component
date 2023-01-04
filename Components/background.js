import React from "react";
import { View, Text } from "react-native";
import { MapButton } from "./button";

export function Background({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Text style={{ color: "black" }}>Things to show</Text>
      <MapButton
        style={{ position: "absolute", left: 0, top: 0 }}
        onPressHandler={() => navigation.navigate('drag')}
      />
    </View>
  );
}
