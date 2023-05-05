import { StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 7 : 64;

export const ContentHeaderProfile = styled.View`
  padding-top: ${statusBarHeight}px;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

export const TouchableOpacityIcons = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`