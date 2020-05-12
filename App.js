import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Movie Search" component={ HomeScreen } />
            <Stack.Screen name="Movie Details" component={ DetailsScreen } />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
