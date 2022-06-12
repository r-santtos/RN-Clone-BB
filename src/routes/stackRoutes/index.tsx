import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** PAGES */
import HomeScreen from '../../screens/HomeScreen';

/** STACK NAVIGATION COMPONENT */
function Stack() {

  /** RETURN STACK NAVIGATION */
  const { Navigator, Screen } = createNativeStackNavigator() as any;
  return (
    <Navigator>
      <Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default Stack;