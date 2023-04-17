import { Routes } from './src/routes';
import { StatusBar, View } from 'react-native'

import Header from "./src/models/Header/components"

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <>
      <Header />
      <Routes />
    </>
  );
}
