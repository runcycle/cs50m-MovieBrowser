import React from 'react';
import { StyleSheet, TextInput, View, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { fetchMovie } from '../api';
import SearchCard from '../SearchCard';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      headerTitle: "Movie Search"
    });
    
    state = {
      input: '',  
      movieData: null,
    }

    getMovie = async () => {
      const results = await fetchMovie(this.state.input)
      this.setState({movieData: results})
      console.log(this.state.movieData)
    }

    handleTextChange() {
      this.getMovie();
    }

    render() {
        return (
          <View behavior="padding" style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Movie Title"
              returnKeyType="search"
              onSubmitEditing={() => this.handleTextChange()}
              onChangeText={text => this.setState({input: text})}
            />
            <FlatList style={{ flex: 1 }}
                data={this.state.movieData}
                renderItem={obj => <SearchCard {...obj.item} />}
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
        borderWidth: 2,
        borderColor: 'black',
        minWidth: 200,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
  });
  
  