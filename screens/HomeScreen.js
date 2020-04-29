import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import {fetchMovie} from '../api';

export default class MovieBrowser extends React.Component {
    state = {
        title: '',
        movies: [],
    }

    getMovie = async () => {
      const results = await fetchMovie(this.state.title)
      this.setState({movies: results})
      console.log(this.state.movies)
    }

    handleTitleSubmit() {
      this.getMovie()
    }
// 4/29 Work on title submit to api
    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Movie Title"
              returnKeyType="search"
              onChangeText={(text) => this.setState({title: text})}
            />
            <Button title="Submit Movie" onPress={() => this.handleTitleSubmit()} />
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
        minWidth: 200,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
  });
  