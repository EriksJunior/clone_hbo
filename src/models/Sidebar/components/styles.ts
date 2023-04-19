import styled from "styled-components/native";

interface Props {
  sideBarActiver?: boolean
}

export const ContentGeneral = styled.View<Props>`
  position: absolute;
  width: ${({ sideBarActiver }) => sideBarActiver ? "100%" : "100%"};
  height: ${({ sideBarActiver }) => sideBarActiver ? "100%" : "0"};
  background-color: #00000061;
  z-index: 3;
`

export const ContentSidebar = styled.View`
  height: 100%;
  width: 50%;
  background-color: #1b1616;
  position: absolute;
  z-index: 2;
`

export const ContentHeader = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
`