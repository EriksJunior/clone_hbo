import { Image } from "react-native"
import { ContentBanner } from "./styles"

export function Banner(){ 
  return(
    <ContentBanner>
      <Image source={require("../../../Header/components/assets/venom.jpg")} style={{width: "100%", height: "100%"}} />
    </ContentBanner>
  )
}