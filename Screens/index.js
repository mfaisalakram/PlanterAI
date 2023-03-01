import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main/Main';
import OledValues from './OledValues/OledValues';
import NftValue from './NftValue/NftValue';
import QRScanner from './QRScanner/QRScanner';
import ARScanner from './ARScanner/ARScanner';
import PrivacyPolicies from './PrivacyPolicies/PrivacyPolicies';

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OledValues"
          component={OledValues}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NftValue"
          component={NftValue}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ARScanner"
          component={ARScanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicies"
          component={PrivacyPolicies}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
