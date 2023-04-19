import React, { createContext, useState } from "react"

interface AuxProps {
  children: React.ReactNode,
}


export const SidebarContext = createContext({})

function SidebarProvider({ children }: AuxProps) {
  const [sidebarActive, setSidebarActive] = useState(false)
  
  return (
    <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider