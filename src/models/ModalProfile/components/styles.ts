import styled from "styled-components/native";

interface Props {
  isModalProfileActive?: boolean
  marginTop?: string
}

export const ContentGeneral = styled.View<Props>`
  position: absolute;
  width: ${({ isModalProfileActive }) => isModalProfileActive ? "100%" : "100%"};
  height: ${({ isModalProfileActive }) => isModalProfileActive ? "100%" : "0"};
  background-color: #00000061;
  z-index: 3;
`

export const ContentProfile = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #1b1616;
  position: absolute;
  z-index: 2;
`