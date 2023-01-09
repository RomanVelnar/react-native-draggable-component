import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  FlatList,
} from "react-native";

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import Reanimated, { EasingNode } from "react-native-reanimated";
import { Card } from "./Card";
import { Data } from "./data";

const { width } = Dimensions.get("screen");

export function Home() {
  const { getList } = Data();
  const { height } = useWindowDimensions();
  const translateY = useRef(new Reanimated.Value(0)).current;

  // Animation logic
  const bringUpActionSheet = () => {
    Reanimated.timing(translateY, {
      toValue: 0,
      duration: 500,
      // useNativeDriver: true,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start();
  };
  const closeDownBottomSheet = () => {
    Reanimated.timing(translateY, {
      toValue: 1,
      duration: 500,
      // useNativeDriver: true,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start();
  };

  const bottomSheetTop = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [height * 0.7 - height / 2.4 + 50, height * 0.7],
  });
  const animatedStyle = {
    top: bottomSheetTop,
    bottom: 0,
  };

  const gestureHandler = (e: PanGestureHandlerGestureEvent) => {
    if (e.nativeEvent.translationY > 0) {
      closeDownBottomSheet();
    } else if (e.nativeEvent.translationY < 0) {
      bringUpActionSheet();
    }
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "gray" }}></View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Reanimated.View
          style={[styles.container, { top: height * 0.7 }, animatedStyle]}
        >
          <Text>I am scroll sheet</Text>
          <FlatList
            data={getList()}
            renderItem={({ item }) => <Card data={item} />}
          />
        </Reanimated.View>
      </PanGestureHandler>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      height: -6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
  mapStyle: {
    width: width,
    height: 800,
  },
});
