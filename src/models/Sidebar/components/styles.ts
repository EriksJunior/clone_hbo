import styled from "styled-components/native";

interface Props {
  isSidebarActive?: boolean
  marginTop?: string
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

export const Option = styled.View`
  margin-top: 25px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Title = styled.Text`
  color: white;
  font-weight: 300;
  font-size: 19px;
`

export const Separate = styled.View<Props>`
  margin-top: ${({marginTop}) => `${marginTop}px`};
  margin-left: 16px;
  margin-right: 16px;
  margin-vertical: 20px;
  border-bottom-color: #737373;
  border-bottom-width: 1px;
`
