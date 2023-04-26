import { ScrollView } from "react-native"
import { Content } from "./styles"

interface AuxProps {
  children: React.ReactNode
}

export function Container({ children }: AuxProps) {
  return (
    <Content>
      <ScrollView>
        {children}
      </ScrollView>
    </Content>
  )
}