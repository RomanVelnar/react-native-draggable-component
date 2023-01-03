import { Text, View } from "react-native";
import { Draggable } from "./Components/draggable";


export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Draggable />
      <Text style={{ color: "black" }}>Things to show</Text>
    </View>
  );
}
