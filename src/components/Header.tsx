
import React from "react";

import { Container, Content } from "./styles";
interface IHeader {
  backgroundColor?: string
  contentRow?: string
}

export default function Header({ backgroundColor, contentRow }: IHeader) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content contentRow={contentRow}>
      </Content>
    </Container>
  );
}