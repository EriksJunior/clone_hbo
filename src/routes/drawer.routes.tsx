import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderProfile } from '../models/ModalProfile/components/Header';
import { TabRoutes } from './tab.routes';

const { Screen, Navigator } = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name='tabs' component={TabRoutes} />
      <Screen name='headerProfile' component={HeaderProfile} />
    </Navigator>
  )
}