import { Routes } from './src/routes';
import { StatusBar } from 'react-native'

export default function App() {
  StatusBar.setBarStyle("dark-content")
  StatusBar.setBackgroundColor("transparent")
  
  return (
    <Routes />
    
  );
}
