import { useContext } from "react";
import { SidebarContext } from "../context";

import { ListPrincipalOptions } from "./ListPrincipalOptions";
import { ListOthersOptions } from "./ListOthersOptions";

import { ContentSidebar, ContentGeneral} from "./styles";

export function Sidebar() {
  const { sidebarActive, principalOptions } = useContext(SidebarContext) as { sidebarActive: boolean,  principalOptions: boolean}

  return (
    <ContentGeneral isSidebarActive={sidebarActive} >
      {sidebarActive &&
        <ContentSidebar>
          {principalOptions ?
            <ListPrincipalOptions /> : <ListOthersOptions />
          }
        </ContentSidebar>
      }
    </ContentGeneral>
  );
}
