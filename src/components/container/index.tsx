import { ScrollView } from "react-native"
import { Content } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

interface AuxProps {
  children: React.ReactNode
}

export function Container({ children }: AuxProps) {
  return (
    <Content>
      <LinearGradient colors={["#110916", "#592478", "#3a1c4b"]}
        start={{ x: 6, y: 0.3 }}
        end={{ x: 6, y: 1.5 }}>
        <ScrollView>
          {children}
        </ScrollView>
      </LinearGradient>
    </Content>
  )
}