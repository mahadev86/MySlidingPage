import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as React from 'react';

// ******************** AUTHUNTICATION ********************
import IntroductionScreen from '../screens/Introduction';
import AssetAllocationScreen from '../screens/AssetAllocation';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation
            .dangerouslyGetState()
            .routes.findIndex((r) => r.key === route.key) > 0
            ? 0
            : undefined,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <Stack.Screen name="Root" component={IntroductionScreen} />
      <Stack.Screen name="AssetAllocation" component={AssetAllocationScreen} />
    </Stack.Navigator>
  );
}
