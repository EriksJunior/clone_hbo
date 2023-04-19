import styled from "styled-components/native";

interface Props {
  isSidebarActive?: boolean
}

export const ContentGeneral = styled.View<Props>`
  position: absolute;
  width: ${({ isSidebarActive }) => isSidebarActive ? "100%" : "100%"};
  height: ${({ isSidebarActive }) => isSidebarActive ? "100%" : "0"};
  background-color: #00000061;
  z-index: 3;
`

export const ContentSidebar = styled.View`
  height: 100%;
  width: 50%;
  flex-direction: column;
  background-color: #1b1616;
  position: absolute;
  z-index: 2;
`
