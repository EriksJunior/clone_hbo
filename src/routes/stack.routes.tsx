import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SProfile } from "../screens/Profile";
import { TabRoutes } from "./tab.routes";
import { Header } from "../models/Header/components";
import { ModalProfile } from "../models/ModalProfile/components";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator  screenOptions={{
      // header: () => {
      //   return <Header />
      // },
      headerShown: false
    }}>
      <Screen
        name="Tabs"
        component={TabRoutes}
      />
      <Screen name="profile" component={ModalProfile}/>
    </Navigator>
  )
}