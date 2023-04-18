import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const Container = styled.View`
  padding-top: ${statusBarHeight}px;
  padding-bottom: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 100px;
  background-color: #000000e1;
  position: absolute;
  z-index: 1;
`;

export const Content = styled.View`
`;

export const ContentUser = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  border: solid 2px deepskyblue;
`;

export const TextHeader = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
  text-align: center;
`;