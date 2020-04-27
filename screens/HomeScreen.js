import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import {fetchUsers} from '../api'

export default class MovieBrowser extends React.Component {
    state = {
        title: '',
        movies: null,
    }

    getUsers = async () => {
      const results = await fetchUsers()
      this.setState({movies: results})
    }

    componentDidMount() {
      this.getUsers()
      console.log(this.state.movies)
    }

    handleTitleChange = title => {
      this.setState({title})
    }

    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <TextInput
              style={styles.input}
              value={this.state.title}
              onChangeText={this.handleTitleChange}
              placeholder="Movie Title"
              autoCapitalize="none"
            />
            <Button title="Submit Movie" />
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
  