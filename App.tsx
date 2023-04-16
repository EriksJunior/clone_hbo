import { Routes } from './src/routes';
import { StatusBar } from 'react-native'
import Header from './src/components/Header';

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
