import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#1a2a6c", "#b21f1f", "#fdbb2d"],
    title: "Thunderstorm",
    subtitle: "Rain comes with Thor⚡️",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#007991", "#78ffd6"],
    title: "Drizzle",
    subtitle: "Rain drops smaller than usual💦",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "Rain",
    subtitle: "Don't need to take a shower🌧",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#F0F2F0", "#000C40"],
    title: "Snow",
    subtitle: "Do you wanna build a snowman☃️",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#0ED2F7", "#B2FEFA"],
    title: "Clear",
    subtitle: "Good day to stroll☀️",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4ECDC4", "#556270"],
    title: "Clouds",
    subtitle: "Sun will shine soon. Cheer up!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#E8CBC0", "#636FA4"],
    title: "Haze",
    subtitle: "Thank you for the pollution😩",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#BDC3C7", "#2C3E50"],
    title: "Dust",
    subtitle: "Cough!😣 Cough!😣",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#3CA1AF", "#C4E0E5"],
    title: "Mist",
    subtitle: "Nice supper for my skin🤨",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#1D2671", "#C33764"],
    title: "Tornado",
    subtitle: "Rock and Roll😱😱",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      //   colors={weatherOptions["Tornado"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "weather-sunset"}
          //   name={weatherOptions["Tornado"].iconName || "weather-sunset"}
          size={96}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temperature}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
