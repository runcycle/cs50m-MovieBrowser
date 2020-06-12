import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import { fetchMovie } from '../api';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Movie Search"
  }
  
  state = {
      input: '',  
      movieData: null,
    }

    getMovie = async () => {
      const results = await fetchMovie(this.state.input)
      this.setState({ movieData: results })
      console.log(this.state.movieData)
    }

    handleSubmit() {
      this.getMovie();
    }

    render() {
      const { navigation } = this.props;
      return (
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView>
            <TextInput
                style={styles.input}
                placeholder="Enter a Movie Title"
                placeholderTextColor="#6d6d6d"
                returnKeyType="search"
                onSubmitEditing={() => this.handleSubmit()}
                onChangeText={text => this.setState({input: text})}
            />
          </KeyboardAvoidingView>
          <FlatList style={{ flex: 1 }}
            data={ this.state.movieData }
            renderItem={({ item: movie }) => (
              <TouchableOpacity onPress={() => {navigation.navigate("Movie Details", {
                id: this.state.movieData
                });
              }}
            >
                <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={{uri: movie.poster}}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </View>
              </TouchableOpacity>)}>
          </FlatList>
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
    row: {
      padding: 15,
      flexDirection: "row",
      width: "100%",
      alignContent: "center",
      backgroundColor: "#e3e3e3"
    },
    image: {
        marginRight: 10,
        width: 100,
        height: 75,
        borderWidth: 2,
        borderColor: 'black'
    },
    title: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        marginLeft: 5
    },
    year: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5
    },
  });
  
  