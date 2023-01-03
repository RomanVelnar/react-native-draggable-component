import React from "react";
import { View, Text } from 'react-native'

export function Background() {
    return(
        <View style={{backgroundColor: "red", height: "100%", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "black"}}>Things to show</Text>
        </View>
    )
}