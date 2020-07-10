import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      state = {
        isLoading: true,
      };
      // 사용자 위치 정보 접근 허가 요청
      await Location.requestPermissionsAsync();

      // 사용자의 위도, 경도 받아오기
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Something's going wrong!!!", "Can't find your location!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const isLoading = this.state;
    return isLoading ? <Loading></Loading> : null;
  }
}
