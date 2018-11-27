import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import PizzaScreen from './Pizza';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pizza: {
    screen: PizzaScreen
  }
});

export default createAppContainer(AppNavigator);
