import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/SHome";
import { Downloads } from "../screens/Downloads";
import { Movies } from "../screens/Movies";
import { Series } from "../screens/Series";
import { Search } from "../screens/Search";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="movies"
        component={Movies}
      />
      <Screen
        name="series"
        component={Series}
      />
      <Screen
        name="downloads"
        component={Downloads}
      />
      <Screen
        name="search"
        component={Search}
      />
    </Navigator>
  )
}