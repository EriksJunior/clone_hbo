import { useContext } from "react"
import { ProfileContext } from "../context"
import { Profile } from "./Profile"
import { ContentGeneral, ContentProfile } from "./styles"

export function ModalProfile() {
  const { modalProfileActice } = useContext(ProfileContext) as { modalProfileActice: boolean }

  return (
    <>
      {modalProfileActice &&
        <ContentGeneral isModalProfileActive={modalProfileActice}>
          <ContentProfile>
            <Profile />
          </ContentProfile>
        </ContentGeneral>
      }
    </>
  )
}