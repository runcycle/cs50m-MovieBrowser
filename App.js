import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
//import DetailsScreen from "./screens/DetailsScreen";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    //Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);


export default class App extends React.Component {
  render() {
      return <MainStack />
    }
  }
