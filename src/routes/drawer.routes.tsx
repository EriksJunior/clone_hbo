import { createDrawerNavigator } from '@react-navigation/drawer';
import { Sidebar } from '../models/Sidebar/components';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Sidebar}
      />
    </Navigator>
  )
}