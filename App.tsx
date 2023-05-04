import { Routes } from './src/routes';
import { StatusBar } from 'react-native'

import { HSP } from './src/models/HSP';

export default function App() {
  StatusBar.setBarStyle("light-content")
  StatusBar.setBackgroundColor("transparent")

  return (
    <>
      <HSP />
      <Routes />
    </>
  );
}
