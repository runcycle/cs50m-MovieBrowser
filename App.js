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
          <Stack.Navigator 
            initialRouteName="Movie Search"
            screenOptions={{
              headerTitleAlign: "center"
              }}
            >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="DetailsScreen" component={ DetailsScreen } />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
