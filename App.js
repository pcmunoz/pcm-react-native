import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import PizzaScreen from './Pizza';
import ButtonScreen from './Button';
import ScrollScreen from './Scroll';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Pizza: {
    screen: PizzaScreen
  },
  Button: {
    screen: ButtonScreen
  },
  Scroll: {
    screen: ScrollScreen
  }
});

export default createAppContainer(AppNavigator);
