import { ScrollView } from "react-native"
import { Content } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

interface AuxProps {
  children: React.ReactNode
}

export function Container({ children }: AuxProps) {
  return (
    <Content>
      <LinearGradient colors={["#000001", "#4a1e64"]}
        start={{ x: 1, y: 3 }}
        end={{ x: 3, y: 0 }}>
        <ScrollView>
          {children}
        </ScrollView>
      </LinearGradient>
    </Content>
  )
}