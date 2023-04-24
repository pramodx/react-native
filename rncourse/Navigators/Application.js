import { JOB_DETAIL, JOB_HOME, START_PAGE } from '@/Config/routeName';
import { StartupContainer } from '@/Containers';
import HomePage from '@/Containers/HomeContainer';
import JobDetailsContainer from '@/Containers/JobDetailsContainer';
import { useTheme } from '@/Hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { navigationRef } from './utils';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <>
      <SafeAreaView
        style={[Layout.fill0, { backgroundColor: colors.primary }]}
      />
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.white }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle='light-content' />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={START_PAGE} component={StartupContainer} />
            <Stack.Screen
              name={JOB_HOME}
              component={HomePage}
              options={{
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name={JOB_DETAIL}
              component={JobDetailsContainer}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default ApplicationNavigator;
