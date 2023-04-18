import { createDrawerNavigator } from '@react-navigation/drawer';
import { Sidebar } from '../models/Sidebar/components';
import { TabRoutes } from './tab.routes';

const { Screen, Navigator } = createDrawerNavigator();

export function TesteNavigator() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      
    }}>
      <Screen name='content' component={TabRoutes} />
      <Screen
        name="ovo"
        component={Sidebar}
      />
    </Navigator>
  )
}