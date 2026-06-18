import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { installWebScrollFix } from './src/webScrollFix';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      installWebScrollFix();
    }
  }, []);

  return <AppNavigator />;
}
