import { View, Text } from "react-native"

import { Container } from "../../../components/container"
import { Banner } from "./Banner"
import { ImageScroll } from "./ImagesScroll"

export function Home() {
  const itens = [
    { source: require("../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
    { source: require("../../Header/components/assets/deadPool2.jpg"), title: "DeadPool 2" },
    { source: require("../../Header/components/assets/jhonWilson4.jpg"), title: "Jhon Wick 4" },
    { source: require("../../Header/components/assets/venom.jpg"), title: "Venom" },
    { source: require("../../Header/components/assets/miranha.jpg"), title: "Homem-Aranha de volta ao lar" },
  ]

  return (
    <Container>
      <Banner />

      <View style={{ flexDirection: "column", gap: 30 }}>
        <ImageScroll itens={itens} type="Continue Assistindo" viewMore={true} enableGradientFistItem={true} arrow={true} enableTitle={true} snapToAlignment="end"/>
        <ImageScroll itens={itens} type="Apenas para você" widthItens={248} heightItens={130} enableMargin={true} snapToAlignment="center"/>
        <ImageScroll itens={itens} type="Meus Favoritos" viewMore={true} arrow={true} enableTitle={true} snapToAlignment="end"/>
        <Text style={{ color: "white" }}>Proximo Conteúdo</Text>
        <Text style={{ color: "white" }}>Proximo Conteúdo</Text>
        <Text style={{ color: "white" }}>Proximo Conteúdo</Text>
      </View>
    </Container>
  )
}