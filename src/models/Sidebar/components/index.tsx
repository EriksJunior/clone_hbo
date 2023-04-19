import { useContext } from "react";
import { SidebarContext } from "../context";

import { View, Text } from "react-native"

import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { ContentSidebar, ContentGeneral } from "./styles";

export function Sidebar() {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext) as { sidebarActive: boolean, setSidebarActive: (value: boolean) => void }

  return (
    <ContentGeneral isSidebarActive={sidebarActive} >
      {sidebarActive &&
        <ContentSidebar>
          <View style={{ marginTop: 35, marginLeft: 16, marginRight: 16 }}>
            <Feather name="x" size={25} color={"white"} onPress={() => setSidebarActive(false)} />
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Séries</Text>
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Filmes</Text>
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Originais</Text>
          </View>

          <View style={{ width: 200, marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Adicionados Recentemente</Text>
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Últimos Dias</Text>
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Em Breve</Text>
          </View>

          <View style={{ marginTop: 25, marginLeft: 16, marginRight: 16 }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Em Alta</Text>
          </View>

          <View style={{ marginTop: 40, marginLeft: 16, marginRight: 16, marginVertical: 20, borderBottomColor: "#737373",  borderBottomWidth: 1}}>
          </View>

          <View style={{ marginLeft: 16, marginRight: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "white", fontWeight: "300", fontSize: 19 }}>Gêneros</Text>
            <SimpleLineIcons name="arrow-right" size={18} color={"white"}/>
          </View>

          <View style={{ marginBottom: 20, marginLeft: 16, marginRight: 16, marginVertical: 20, borderBottomColor: "#737373",  borderBottomWidth: 1}}>
          </View>
        </ContentSidebar>
      }
    </ContentGeneral>
  );
}
