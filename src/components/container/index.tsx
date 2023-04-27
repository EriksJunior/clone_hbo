import { ScrollView } from "react-native"
import { Content } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

interface AuxProps {
  children: React.ReactNode
}

export function Container({ children }: AuxProps) {
  return (
    <Content>
      <ScrollView>
        <LinearGradient colors={["#000001", "#030105", "#4a1e64", "#000001"]}
          style={{width: '100%' }}
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0.5, y: 1 }}>
          {children}
        </LinearGradient>
      </ScrollView>
    </Content>
  )
}