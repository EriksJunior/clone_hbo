import { useContext } from 'react';
import { SidebarContext } from '../../Sidebar/context';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, Platform, UIManager, LayoutAnimation } from "react-native"

import { Container, Content, ContentUser, TextHeader } from "./styles";

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Header() {
  const { setSidebarActive } = useContext(SidebarContext) as { setSidebarActive: (value: boolean) => void }

  return (
    <Container>
      <Content>
        <TouchableOpacity activeOpacity={0.5} >
          <Feather name="menu" size={24} color={"white"} onPress={() => {
            LayoutAnimation.configureNext({
              duration: 90,
              create: { type: 'linear', property: 'opacity' },
            });
            setSidebarActive(true)
          }} />
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