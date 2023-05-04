import { Header } from "../Header/components"
import { ModalProfile } from "../ModalProfile/components"
import { Sidebar } from "../Sidebar/components"

import SidebarProvider from "../Sidebar/context"
import ModalProfileProvider from "../ModalProfile/context"

export function HSP() {
  return (
    <SidebarProvider>
      <ModalProfileProvider>
        <Header />
        <ModalProfile />
      </ModalProfileProvider>
      <Sidebar />
    </SidebarProvider>
  )
}