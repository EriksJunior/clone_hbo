import { useContext, useState } from "react";
import { SidebarContext } from "../context";

import { View, Pressable, LayoutAnimation } from "react-native"

import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { ContentSidebar, ContentGeneral, Option, Title, Separate } from "./styles";
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export function Sidebar() {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext) as { sidebarActive: boolean, setSidebarActive: (value: boolean) => void }
  const [principalOptions, setprincipalOptions] = useState(true)

  const otherOptionAnimated = useSharedValue(0)
  const principalOptionAnimated  = useSharedValue(1)

  const enableOthersOptions = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: interpolate(otherOptionAnimated.value, [0, 1], [-100, 0])
      }],
      opacity: interpolate(otherOptionAnimated.value, [0, 1], [0, 1])
    }
  })

  const enablePrincipalOptions = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: interpolate(principalOptionAnimated.value, [1, 0], [0, 50])
      }],
      opacity: interpolate(otherOptionAnimated.value, [0, 1], [1, 0])
    }
  })

  const applyAnimated = () => {
    const newValue = 1
    otherOptionAnimated.value = withTiming(newValue, { duration: 500})
    principalOptionAnimated.value = withTiming(0, { duration: 500 }) //, easing: Easing.bounce para fazer uma animação de tremer ao finalizar
  }

  const disableAnimated = () => {
    const newValue = 0
    otherOptionAnimated.value = withTiming(newValue, { duration: 500 })
    principalOptionAnimated.value = withTiming(1, { duration: 500 })
  }

  return (
    <ContentGeneral isSidebarActive={sidebarActive} >
      {sidebarActive &&
        <ContentSidebar>
          {principalOptions ?
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

            :

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
          }
        </ContentSidebar>
      }
    </ContentGeneral>
  );
}
