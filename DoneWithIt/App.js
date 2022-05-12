import React from "react";
import { 
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
      <SafeAreaView style={[styles.container, containerStyle]}>
        <View style={{
          backgroundColor: 'dodgerblue',
          width: "100%",
          height: landscape ? '100%' : '30%'
        }}></View>
      </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
