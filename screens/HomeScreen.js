import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Constants } from 'expo';

export default class MovieBrowser extends React.Component {
    state = {
        title: ""
    }
    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <TextInput
              style={styles.input}
              value={this.state.title}
              // onChangeText={}
              placeholder="Movie Title"
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
      },
  });
  
  const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Results: ResultsScreen
   },
   {
     initialRouteName: "HomeScreen"
   });