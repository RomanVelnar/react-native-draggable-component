import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ContentComponent } from "./ContentComponent";
import { Draggable } from "./Draggable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function Home() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <View style={{ flex: 1, backgroundColor: "gray" }}>
            <Text>afdafdsaf</Text>
            <Draggable>
            <ContentComponent style={{ height: 60, marginBottom: 10 }} />
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <ContentComponent
                style={{ flex: 1, height: 120, marginRight: 10 }}
                />
                <ContentComponent style={{ flex: 1, height: 120 }} />
            </View>
            </Draggable>
        </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F59CFF",
  },
});
