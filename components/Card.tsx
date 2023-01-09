import React from "react";
import { Image, View, Text } from "react-native";

export function Card({data}) {
  return (
    <View style={{ flex: 1 }}>
      {data.imageURL && (
        <Image style={{ width: "100%" }} source={{ uri: data.imageURL }} />
      )}
      <Text>{data.name}</Text>
      <Text>{data.price}</Text>
    </View>
  );
}
