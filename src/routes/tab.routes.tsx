import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { Home } from "../screens/SHome";
import { Downloads } from "../screens/Downloads";
import { Movies } from "../screens/Movies";
import { Series } from "../screens/Series";
import { Search } from "../screens/Search";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarIconStyle: {
        color: "black"
      }
    }}>
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <AntDesign name="home" size={size} />
          )
        }}
      />
      <Screen
        name="Filmes"
        component={Movies}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="movie-open-outline" size={size} />
          )
        }}
      />
      <Screen
        name="Séries"
        component={Series}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="tv" size={size} />
          )
        }}
      />
      <Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ size }) => (
            <AntDesign name="download" size={size} />
          )
        }}
      />
      <Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="search-outline" size={size} />
          )
        }}
      />
    </Navigator>
  )
}