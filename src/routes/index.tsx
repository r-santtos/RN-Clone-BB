import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './stackRoutes';

function Routes() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default Routes;