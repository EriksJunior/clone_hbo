import { Header } from "../Header/components"
import { ModalProfile } from "../ModalProfile/components"
import { Sidebar } from "../Sidebar/components"

import SidebarProvider from "../Sidebar/context"
import ProfileProvider from "../ModalProfile/context"

export function HSP() {
  return (
    <SidebarProvider>
      <ProfileProvider>
        <Header />
        <ModalProfile />
      </ProfileProvider>
      <Sidebar />
    </SidebarProvider>
  )
}