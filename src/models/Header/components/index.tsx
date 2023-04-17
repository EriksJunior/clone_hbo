
import React from "react";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image } from "react-native"

import { Container, Content, ContentUser, TextHeader } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <TouchableOpacity activeOpacity={0.5}>
          <Feather name="menu" size={24} color={"white"} />
        </TouchableOpacity>
      </Content>

      <Content>
        <TouchableOpacity activeOpacity={0.5}>
          <TextHeader>HBOMAX</TextHeader>
        </TouchableOpacity>
      </Content>

      <TouchableOpacity activeOpacity={0.5}>
        <ContentUser>
          <Image source={require("./assets/avatarUser.png")} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
        </ContentUser>
      </TouchableOpacity>
    </Container>
  );
}