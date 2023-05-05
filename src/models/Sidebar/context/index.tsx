import React, { createContext, useState } from "react"
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

interface AuxProps {
  children: React.ReactNode,
}

export const SidebarContext = createContext({})

function SidebarProvider({ children }: AuxProps) {
  const [sidebarActive, setSidebarActive] = useState(false)
  const [principalOptions, setprincipalOptions] = useState(true)
  
  const otherOptionAnimated = useSharedValue(0)
  const principalOptionAnimated = useSharedValue(1)

  const enableOthersOptions = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: interpolate(otherOptionAnimated.value, [0, 1], [-100, 0])
      }],
      opacity: interpolate(otherOptionAnimated.value, [0, 1], [0, 1])
    }
  })


  const enablePrincipalOptions = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: interpolate(principalOptionAnimated.value, [1, 0], [0, 50])
      }],
      opacity: interpolate(otherOptionAnimated.value, [0, 1], [1, 0])
    }
  })

  const applyAnimated = () => {
    const newValue = 1
    otherOptionAnimated.value = withTiming(newValue, { duration: 500 })
    principalOptionAnimated.value = withTiming(0, { duration: 500 }) //, easing: Easing.bounce para fazer uma animação de tremer ao finalizar
  }

  const disableAnimated = () => {
    const newValue = 0
    otherOptionAnimated.value = withTiming(newValue, { duration: 500 })
    principalOptionAnimated.value = withTiming(1, { duration: 500 })
  }

  return (
    <SidebarContext.Provider value={{ sidebarActive, setSidebarActive, enableOthersOptions, enablePrincipalOptions, applyAnimated, disableAnimated, principalOptions, setprincipalOptions }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider