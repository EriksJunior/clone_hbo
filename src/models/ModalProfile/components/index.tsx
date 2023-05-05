import { useContext } from "react"
import { ModalProfileContext } from "../context"
import { Profile } from "./Profile"
import { ContentGeneral } from "./styles"

export function ModalProfile() {
  const { modalProfileActice } = useContext(ModalProfileContext) as { modalProfileActice: boolean }

  return (
    <>
      {modalProfileActice &&
        <ContentGeneral isModalProfileActive={modalProfileActice}>
          <Profile />
        </ContentGeneral>
      }
    </>
  )
}