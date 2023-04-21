import { useContext } from "react";
import { SidebarContext } from "../../context";

import { View } from "react-native"
import Animated from "react-native-reanimated"

import { SimpleLineIcons } from '@expo/vector-icons';
import { Option, Title } from "../styles";

export function ListOthersOptions() {
  const {enableOthersOptions, setprincipalOptions, disableAnimated } = useContext(SidebarContext) as { enableOthersOptions: any, setprincipalOptions: (value: boolean) => void, disableAnimated: () => void }

  return (
    <Animated.View style={enableOthersOptions}>
      <View style={{ marginTop: 35, marginLeft: 16, marginRight: 16 }}>
        <SimpleLineIcons name="arrow-left" size={18} color={"white"} onPress={() => {
          setprincipalOptions(true),
            disableAnimated()
        }} />
      </View>

      <Option>
        <Title>Ação</Title>
      </Option>

      <Option>
        <Title>Animação</Title>
      </Option>

      <Option>
        <Title>Comédia</Title>
      </Option>

      <Option>
        <Title>Policial</Title>
      </Option>

      <Option>
        <Title>Documentarios</Title>
      </Option>

      <Option>
        <Title>Drama</Title>
      </Option>

      <Option>
        <Title>Ficção Científica e Fantasia</Title>
      </Option>

      <Option>
        <Title>Terror e Suspense</Title>
      </Option>

      <Option>
        <Title>Internacional</Title>
      </Option>

      <Option>
        <Title>Crianças e Família</Title>
      </Option>

      <Option>
        <Title>Produções Latinoamericanas</Title>
      </Option>

      <Option>
        <Title>Romance</Title>
      </Option>
    </Animated.View>
  )
}