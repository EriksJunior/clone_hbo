import { useContext } from "react"
import { ModalProfileContext } from "../context"
import { HeaderProdile } from "./Header"
import { Profile } from "./Profile"
import { ContentGeneral } from "./styles"

export function ModalProfile() {
  const { modalProfileActice } = useContext(ModalProfileContext) as { modalProfileActice: boolean }

  return (
    <>
      {modalProfileActice &&
        <ContentGeneral isModalProfileActive={modalProfileActice}>
          <HeaderProdile />
          <Profile />
        </ContentGeneral>
      }
    </>
  )
}