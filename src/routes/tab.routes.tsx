import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { SHome } from "../screens/SHome";
import { SMovies } from "../screens/Movies";
import { SSeries } from "../screens/Series";
import { SDownloads } from "../screens/Downloads";
import { SSearch } from "../screens/Search";
import { SProfile } from "../screens/Profile";
import { StackRoutes } from "./stack.routes";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#000000da",
        height: 80,
        borderTopColor: "transparent",
        position: "absolute",
        elevation: 0,
      },
      tabBarActiveTintColor: "white",
    }}>
      <Screen
        name="Inicio"
        component={SHome}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          unmountOnBlur: true
        }}
      />
      <Screen
        name="Filmes"
        component={SMovies}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="movie-open-outline" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Séries"
        component={SSeries}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="tv" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Downloads"
        component={SDownloads}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="download" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Pesquisar"
        component={SSearch}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          )
        }}
      />
       {/* <Screen
        name="Perfile"
        component={StackRoutes}
        options={{
          tabBarIcon: () => (
            null
          ),
        }}
      /> */}
    </Navigator>
  )
}