import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Anime} from '../screens/Anime';

type MainStackType = {
  Home: undefined;
  Anime: {id: string};
};

const MainStack = createStackNavigator<MainStackType>();

export const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Anime" component={Anime} />
    </MainStack.Navigator>
  );
};
