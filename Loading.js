import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { AppLoading } from "expo";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Getting the current weather...🤔</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#157145",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 28,
  },
});
