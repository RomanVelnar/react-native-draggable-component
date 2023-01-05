import React, { useCallback, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetFooterProps, useBottomSheet } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CustomFooterProps extends BottomSheetFooterProps {}


export function Draggable() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["70", "10%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  
  const { collapse, animatedIndex } = useBottomSheet();

  const handleButtonPress = useCallback(() => {
    if (animatedIndex.value === 0) {
      collapse();
    }
  }, [collapse, animatedIndex]);
  
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        // enableContentPanningGesture={true}
        // enableHandlePanningGesture={true}
        enableOverDrag={false}
      >
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <Text>Blablabalblab</Text>
          <TouchableOpacity
            style={{ backgroundColor: "gray", width: 60 }}
            onPress={handleButtonPress}
          >
            <Text>Map</Text>
          </TouchableOpacity>
      </BottomSheet>
    </View>
  );
}
