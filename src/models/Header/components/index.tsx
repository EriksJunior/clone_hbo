import { useContext } from 'react';
import { SidebarContext } from '../../Sidebar/context';

import { TouchableOpacity, Image, Platform, UIManager, LayoutAnimation, Text } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather, Octicons } from '@expo/vector-icons';

import { Container, Content, ContentUser, TextHeader } from "./styles";

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Header() {
  const { setSidebarActive } = useContext(SidebarContext) as { setSidebarActive: (value: boolean) => void }
  const navigate: any = useNavigation()
  const route = useRoute()
  const routePathName = route.name

  return (
    <Container pathNameIsProfile={routePathName}>
      <Content>
        <TouchableOpacity activeOpacity={0.5} style={{ width: 35, height: 35, justifyContent: "center", alignItems: "center" }} onPress={() => {
          LayoutAnimation.configureNext({
            duration: 90,
            create: { type: "linear", property: "opacity" },
          });

          routePathName === "Profile" ? navigate.navigate("Tabs") : setSidebarActive(true)
        }}>
          <Octicons name={routePathName === "Profile" ? "arrow-left" : "three-bars"} size={routePathName === "Profile" ? 25 : 20} color={"white"} />
        </TouchableOpacity>
      </Content>

      <TouchableOpacity activeOpacity={0.5}>
        {routePathName !== "Profile" &&
          <TextHeader>HBOMAX</TextHeader>
        }
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} onPress={() => navigate.navigate("Profile")}>
        {routePathName !== "Profile" ?
          <ContentUser>
            <Image source={require("./assets/avatarUser.png")} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
          </ContentUser>
          :
          <Octicons name="gear" size={20} color="white" />
        }
      </TouchableOpacity>
    </Container>
  );
}