import { useContext } from "react";
import { SidebarContext } from "../context";

import { View, Text, LayoutAnimation } from "react-native"

import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { ContentSidebar, ContentGeneral, Option, Title, Separate } from "./styles";

export function Sidebar() {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext) as { sidebarActive: boolean, setSidebarActive: (value: boolean) => void }

  return (
    <ContentGeneral isSidebarActive={sidebarActive} >
      {sidebarActive &&
        <ContentSidebar>
          <View style={{ marginTop: 35, marginLeft: 16, marginRight: 16 }}>
            <Feather name="x" size={25} color={"white"} onPress={() => {
              LayoutAnimation.configureNext({
                duration: 90,
                delete: { type: 'linear', property: 'opacity' },
              })
              setSidebarActive(false)
            }} />
          </View>

          <Option>
            <Title>Séries</Title>
          </Option>

          <Option>
            <Title>Filmes</Title>
          </Option>

          <Option>
            <Title>Originais</Title>
          </Option>

          <Option style={{ width: 200, marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Title>Adicionados Recentemente</Title>
          </Option>

          <Option>
            <Title>Últimos Dias</Title>
          </Option>

          <Option>
            <Title>Em Breve</Title>
          </Option>

          <Option>
            <Title>Em Alta</Title>
          </Option>

          <Separate marginTop="40"/>

          <View style={{ marginLeft: 16, marginRight: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Title>Gêneros</Title>
            <SimpleLineIcons name="arrow-right" size={18} color={"white"} />
          </View>

          <Separate marginTop="20"/>
        </ContentSidebar>
      }
    </ContentGeneral>
  );
}
