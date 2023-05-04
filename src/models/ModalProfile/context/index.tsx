import React, { createContext, useState } from "react"

interface AuxProps {
  children: React.ReactNode,
}

export const ModalProfileContext = createContext({})

function ModalProfileProvider({ children }: AuxProps) {
  const [modalProfileActice, setModalProfileActice] = useState(false)

  return (
    <ModalProfileContext.Provider value={{ modalProfileActice, setModalProfileActice }}>
      {children}
    </ModalProfileContext.Provider>
  )
}

export default ModalProfileProvider