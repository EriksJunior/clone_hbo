import { Routes } from './src/routes';
import { StatusBar } from 'react-native'

import { Sidebar } from './src/models/Sidebar/components';
import SidebarProvider from './src/models/Sidebar/context';

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <Routes />
      </SidebarProvider>
    </>
  );
}
