import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
// import ResultsScreen from ""

const MainStack = createStackNavigator(
  {
    HomeScreen,
    //ResultsScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

const AppNavigator = createAppContainer(MainStack);

export default class App extends Component {
  render() {
      return <AppNavigator />
    }
  }
