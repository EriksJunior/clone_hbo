
import React from "react";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native"

import { Container, Content, TextHeader } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <TouchableOpacity activeOpacity={0.5}>
          <Feather name="menu" size={24} color={"white"} />
        </TouchableOpacity>
      </Content>

      <Content>
        <TextHeader>HBOMAX</TextHeader>
      </Content>

      <Content>
        <TextHeader>User</TextHeader>
      </Content>
    </Container>
  );
}