import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/SHome";
import { Downloads } from "../screens/Downloads";
import { Movies } from "../screens/Movies";
import { Series } from "../screens/Series";
import { Search } from "../screens/Search";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{
      tabBarShowLabel: false
    }}>
      <Screen
        name="Inicio"
        component={Home}
      />
      <Screen
        name="Filmes"
        component={Movies}
      />
      <Screen
        name="Séries"
        component={Series}
      />
      <Screen
        name="Downloads"
        component={Downloads}
      />
      <Screen
        name="Pesquisar"
        component={Search}
      />
    </Navigator>
  )
}