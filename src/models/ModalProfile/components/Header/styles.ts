import { StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 7 : 64;

export const ContentHeaderProfile = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #1b1616;
  position: absolute;
  z-index: 2;
  padding-top: ${statusBarHeight}px;
`