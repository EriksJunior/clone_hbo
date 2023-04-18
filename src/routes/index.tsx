import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { TabRoutes } from './tab.routes'
import { StackRoutes } from './stack.routes'
import { DrawerRoutes } from './drawer.routes'
import { TesteNavigator } from './teste.routes'

const { Screen, Navigator } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <TesteNavigator />
    </NavigationContainer>
  )
}