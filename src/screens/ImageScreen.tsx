import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ImageScreen = (props:any) => {
  return (
    <View style={styles.mainView}>
      <Text>Image Screen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          console.log("Go to details");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageScreen;
