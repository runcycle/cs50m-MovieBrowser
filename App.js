import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from '@react-navigation/stack';
import MovieBrowser from './screens/HomeScreen';

/*
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen
  },
  {
    initialRouteName: "Home"
  }
);
*/
export default class App extends Component {
  render() {
      return <MovieBrowser />
    }
  }
  

