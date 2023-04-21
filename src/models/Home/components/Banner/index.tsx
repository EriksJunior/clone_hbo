import { Dimensions, Image, ScrollView, Text } from "react-native"
import { ContentBanner } from "./styles"

export function Banner() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <ContentBanner>
      <ScrollView horizontal={true}>
        <Image source={require("../../../Header/components/assets/venom.jpg")} style={{ width: windowWidth, height: "100%" }} />
        <Image source={require("../../../Header/components/assets/miranha.jpg")} style={{ width: windowWidth, height: "100%" }} />
        <Image source={require("../../../Header/components/assets/deadPool2.jpg")} style={{ width: windowWidth, height: "100%" }} />
        <Image source={require("../../../Header/components/assets/jhonWilson4.jpg")} style={{ width: windowWidth, height: "100%" }} />
      </ScrollView>
    </ContentBanner>
  )
}