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