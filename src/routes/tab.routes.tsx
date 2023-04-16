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
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#181818',
      },
      tabBarActiveTintColor: "white"
    }}>
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color}/>
          )
        }}
      />
      <Screen
        name="Filmes"
        component={Movies}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="movie-open-outline" size={size} color={color}/>
          )
        }}
      />
      <Screen
        name="Séries"
        component={Series}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="tv" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="download" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}