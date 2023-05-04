import { useContext } from "react"
import { ModalProfileContext } from "../../context"

import { TouchableOpacity } from "react-native";
import { Octicons } from '@expo/vector-icons';

import { ContentHeaderProfile } from "./styles";

export function HeaderProdile() {
  const { setModalProfileActice } = useContext(ModalProfileContext) as { setModalProfileActice: (value: boolean) => void }

  return (
    <ContentHeaderProfile>
      <TouchableOpacity onPress={() => setModalProfileActice(false)}>
        <Octicons name="arrow-left" size={24} color={'white'} />
      </TouchableOpacity>
    </ContentHeaderProfile>
  )
}