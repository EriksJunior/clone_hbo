import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SHome } from "../screens/SHome";
import { SDownloads } from "../screens/Downloads";
import { SMovies } from "../screens/Movies";
import { SSeries } from "../screens/Series";
import { SSearch } from "../screens/Search";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={SHome}
      />
      <Screen
        name="movies"
        component={SMovies}
      />
      <Screen
        name="series"
        component={SSeries}
      />
      <Screen
        name="downloads"
        component={SDownloads}
      />
      <Screen
        name="search"
        component={SSearch}
      />
    </Navigator>
  )
}