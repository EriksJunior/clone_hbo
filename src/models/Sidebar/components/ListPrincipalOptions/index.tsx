import { useContext } from "react";
import { SidebarContext } from "../../context";

import { LayoutAnimation, Pressable, View } from "react-native"
import Animated from "react-native-reanimated"

import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Option, Separate, Title } from "../styles";

export function ListPrincipalOptions() {
  const { setSidebarActive, enablePrincipalOptions, applyAnimated, setprincipalOptions } = useContext(SidebarContext) as { setSidebarActive: (value: boolean) => void, enablePrincipalOptions: any, applyAnimated: () => void, setprincipalOptions: (value: boolean) => void }

  return (
    <Animated.View style={enablePrincipalOptions}>
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

      <Option>
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

      <Pressable onPress={() => {
        setprincipalOptions(false),
          applyAnimated()
      }}>
        <Separate marginTop="40" />

        <View style={{ marginLeft: 16, marginRight: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Title>Gêneros</Title>
          <SimpleLineIcons name="arrow-right" size={18} color={"white"} />
        </View>

        <Separate marginTop="20" />
      </Pressable>
    </Animated.View>
  )
}