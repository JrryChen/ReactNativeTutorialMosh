import React from "react";
import { 
  Button,
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';

export default function App() {
   
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me" 
        onPress={() => console.log("Button Pressed")}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
