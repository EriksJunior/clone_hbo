import { useContext } from "react"
import { ModalProfileContext } from "../../context"

import { Octicons } from '@expo/vector-icons';
import { ContentHeaderProfile, TouchableOpacityIcons } from "./styles";
import { LayoutAnimation } from "react-native";

export function HeaderProdile() {
  const { setModalProfileActice } = useContext(ModalProfileContext) as { setModalProfileActice: (value: boolean) => void }

  return (
    <ContentHeaderProfile>
      <TouchableOpacityIcons activeOpacity={0.5} onPress={() => {
        LayoutAnimation.configureNext({
          duration: 190,
          create: { type: "linear", property: "opacity" },
        });

        setModalProfileActice(false)
      }}>
        <Octicons name="arrow-left" size={24} color={'white'} />
      </TouchableOpacityIcons>

      <TouchableOpacityIcons activeOpacity={0.5} onPress={() => console.log('confi')}>
        <Octicons name="gear" size={22} color={'white'} />
      </TouchableOpacityIcons>
    </ContentHeaderProfile>
  )
}