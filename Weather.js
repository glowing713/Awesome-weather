import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#3E5151", "#DECBA4"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "weather-sunset"}
          size={96}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temperature}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
