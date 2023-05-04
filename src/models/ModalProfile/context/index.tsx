import React, { createContext, useState } from "react"

interface AuxProps {
  children: React.ReactNode,
}

export const ProfileContext = createContext({})

function ProfileProvider({ children }: AuxProps) {
  const [modalProfileActice, setModalProfileActice] = useState(false)

  return (
    <ProfileContext.Provider value={{ modalProfileActice, setModalProfileActice }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider