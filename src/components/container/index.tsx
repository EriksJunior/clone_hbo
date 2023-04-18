import { Content } from "./styles"

interface AuxProps {
  children: React.ReactNode
}

export function Container({ children }: AuxProps) {
  return (
    <Content>
      {children}
    </Content>
  )
}