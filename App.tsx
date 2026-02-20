import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/Theme/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#ffffff"
        />
        <AppNavigator />
      </>
    </ThemeProvider>
    </AuthProvider>
  );
}