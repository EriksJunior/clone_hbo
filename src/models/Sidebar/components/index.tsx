import { useContext } from "react";
import { View, Text } from "react-native"
import { SidebarContext } from "../context";
import { Header } from "../../Header/components";
import { ContentSidebar, ContentGeneral, ContentHeader } from "./styles";

export function Sidebar() {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext) as { sidebarActive: boolean, setSidebarActive: (value: boolean) => void }

  return (
    <ContentGeneral isSidebarActive={sidebarActive} >
      {sidebarActive &&
        <ContentSidebar>
          <View style={{ paddingTop: 50 }}>
            <Text style={{ color: "white" }} onPress={() => setSidebarActive(false)}>X</Text>
          </View>
        </ContentSidebar>
      }

      <ContentHeader>
        <Header activeSidebar={() => setSidebarActive(true)} />
      </ContentHeader>
    </ContentGeneral>
  );
}
