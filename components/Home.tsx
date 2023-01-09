import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  RefreshControl,
  Animated,
  Button,
  FlatList,
  ScrollView
} from "react-native";

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TouchableOpacity,
} from "react-native-gesture-handler";

import Reanimated, { EasingNode } from 'react-native-reanimated';
import { Data } from "./data";

const { width } = Dimensions.get("screen");

export default function Home() {
  const { getList } = Data()
  const { height } = useWindowDimensions();
  const translateY = useRef(new Reanimated.Value(0)).current;

  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Animation logic
  const bringUpActionSheet = () => {
    Reanimated.timing(translateY, {
      toValue: 0,
      duration: 500,
      // useNativeDriver: true,
      easing: EasingNode.inOut(EasingNode.ease)
    }).start();
  };
  const closeDownBottomSheet = () => {
    Reanimated.timing(translateY, {
      toValue: 1,
      duration: 500,
      // useNativeDriver: true,
      easing: EasingNode.inOut(EasingNode.ease)
    }).start();
  };
  
  const bottomSheetTop = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [height * 0.7 - height / 2.4 + 50, height * 0.7]
  });
  const animatedStyle = {
    top: bottomSheetTop,
    bottom: 0
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
      <View style={{flex: 1, backgroundColor: "gray"}}></View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Reanimated.View
          style={[styles.container, { top: height * 0.7 }, animatedStyle]}
        >
              <Title>I am scroll sheet</Title>
              <FlatList 
                  
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

const HeroFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
  paddingBottom: 50
  },
  // height:510,
  // flex:1
})``; 



const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const DescriptionText = styled(Title)`
  font-size: 14px;
  opacity: 0.7;
`;

const DateText = styled(Title)`
  font-size: 14px;
  opacity: 0.8;
  color: #0099cc;
`;

const EventImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  margin-right: 20px;
`;

const DescriptionContainer = styled.View`
  width: 200px;
`;

const EventContainer = styled(Animated.View)`
  flex-direction: row;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 20px;
  shadow-offset: 0 10px;
`;
