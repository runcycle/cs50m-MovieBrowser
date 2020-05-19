import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, View, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { fetchMovie } from '../api';
import SearchCard from '../SearchCard';

export default class HomeScreen extends React.Component {
  state = {
      input: '',  
      movieData: null,
    }

    getMovie = async () => {
      const results = await fetchMovie(this.state.input)
      this.setState({ movieData: results })
      console.log(this.state.movieData)
    }

    handleTextChange() {
      this.getMovie();
    }

    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <KeyboardAvoidingView>
              <TextInput
                  style={styles.input}
                  placeholder="Enter a Movie Title"
                  placeholderTextColor="#6d6d6d"
                  returnKeyType="search"
                  onSubmitEditing={() => this.handleTextChange()}
                  onChangeText={text => this.setState({input: text})}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Movie Details")}>
              <FlatList style={{ flex: 1 }}
                data={this.state.movieData}
                renderItem={obj => <SearchCard {...obj.item} />}
                >
              </FlatList>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        backgroundColor: "#ffa200",
        paddingTop: Constants.statusBarHeight,
    },
    input: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "black",
        minWidth: 300,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
  });
  
  