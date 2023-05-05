import { useContext } from 'react';
import { SidebarContext } from '../../Sidebar/context';
import { ModalProfileContext } from '../../ModalProfile/context';

import { TouchableOpacity, Image, Platform, UIManager, LayoutAnimation, Text } from "react-native"
import { Octicons } from '@expo/vector-icons';
import { Container, Content, ContentUser, TextHeader } from "./styles";

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Header() {
  const { setSidebarActive } = useContext(SidebarContext) as { setSidebarActive: (value: boolean) => void }
  const { setModalProfileActice } = useContext(ModalProfileContext) as { setModalProfileActice: (value: boolean) => void}
  
  return (
    <Container>
      <Content>
        <TouchableOpacity activeOpacity={0.5} style={{ width: 35, height: 35, justifyContent: "center", alignItems: "center" }} onPress={() => {
          LayoutAnimation.configureNext({
            duration: 90,
            create: { type: "linear", property: "opacity" },
          });

          setSidebarActive(true)
        }}>
          <Octicons name={"three-bars"} size={20} color={"white"} />
        </TouchableOpacity>
      </Content>

      <TouchableOpacity activeOpacity={0.5}>
        <TextHeader>HBOMAX</TextHeader>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} onPress={() => {
         LayoutAnimation.configureNext({
          duration: 900,
          delete: { type: 'linear', property: 'opacity' },
        }),
        setModalProfileActice(true)
      }}>
        <ContentUser>
          <Image source={require("./assets/avatarUser.png")} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
        </ContentUser>
      </TouchableOpacity>
    </Container>
  );
}