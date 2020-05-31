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

    handleTextChange() {
      this.getMovie();
    }

    
    //renderItem = ({ item }) => <SearchCard {...item} navigationData={this.handleNavigation} />
  render() {
      const { navigation } = this.props

      handleNavigation = (id, title) => {
        navigation.navigate("Movie Details", {id:id, title:title})
      }

      SearchCard = props => (
        <TouchableOpacity onPress={() => props.handleNavigation(props.imdbID, props.title)}>
          <View style={styles.row}>
              <Image
                  style={styles.image}
                  source={{uri: props.poster}}
              />
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.title}>{props.title}</Text>
                  <Text style={styles.year}>{props.year}</Text>
              </View>
          </View>
        </TouchableOpacity>
      );

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
          <FlatList style={{ flex: 1 }}
            data={this.state.movieData}
            renderItem={({ item }) => <SearchCard {...item} navigationData={this.handleNavigation} />}
          >
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
  
  