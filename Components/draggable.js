import React, { useCallback, useMemo, useRef } from "react";
import { View, Text } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet";

export function Draggable() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index)
    }, [])

    return(
        <View style={{flex: 1, backgroundColor: "blue"}}>
            <BottomSheet 
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            />
            <View>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
                <Text>Blablabalblab</Text>
            </View>    

        </View>
    )
}