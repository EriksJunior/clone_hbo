import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SProfile } from "../screens/Profile";
import { TabRoutes } from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="tabs"
        component={TabRoutes}
      />
      <Screen
        name="profile"
        component={SProfile}
      />
    </Navigator>
  )
}