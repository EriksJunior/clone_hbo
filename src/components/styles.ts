import styled from 'styled-components/native'
import {
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

interface IContainerStyleProps {
  backgroundColor?: string
  contentRow?: string
}

export const Container = styled.View<IContainerStyleProps>`
  background-color: ${props => props.backgroundColor};
  padding-top: ${statusBarHeight}px;
  padding-bottom: 10px;
  flex-direction: row;
  flex: 0.03;
  justify-content: space-evenly;
  gap: 100px;
  background-color: #181818;
`;

export const Content = styled.View<IContainerStyleProps>`
`;

export const TextHeader = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
  text-align: center;
`;