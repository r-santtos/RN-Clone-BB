import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#0a61a9',
      }}
    >
      <StatusBar style='light' backgroundColor='rgba(0,0,0, 0.3)' />
      <Routes />
    </SafeAreaProvider>
  );
}