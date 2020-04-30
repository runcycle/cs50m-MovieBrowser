import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import Constants from 'expo-constants';
import {fetchMovie} from '../api';

export default class MovieBrowser extends React.Component {
    state = {
      input: '',  
      movieData: [],
    }

    getMovie = async () => {
      const results = await fetchMovie(this.state.input)
      this.setState({movieData: results})
      console.log(this.state.movieData)
    }

    handleTitleSubmit() {
      this.getMovie();
    }

    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Movie Title"
              returnKeyType="search"
              onChangeText={text => this.setState({input: text})}
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
  