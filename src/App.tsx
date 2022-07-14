import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider as PaperProvider} from 'react-native-paper';

import BaseForm from './screen/BaseForm';
import PayForm from './screen/PayForm';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarIcon: ({focused, color}) => {
              let iconName = focused ? 'ios-card' : 'ios-card-outline';

              return <Ionicons name={iconName} size={24} color={color} />;
            },
            tabBarActiveTintColor: '#ff777e',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Form" children={() => <BaseForm anim={false} />} />
          <Tab.Screen
            name="Form Fancy"
            children={() => <BaseForm anim={true} />}
          />
          <Tab.Screen name="Form Pay" component={PayForm} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
