import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 7 : 64;

interface IView {
  pathNameIsProfile: string
}

export const Container = styled.View<IView>`
  padding-top: ${statusBarHeight}px;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: ${props => props.pathNameIsProfile !== "Profile" ? "105px" : "140px"};
  background-color: transparent;
  position: absolute;
  z-index: 9999;
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