import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
       details: null,
   }

   componentDidMount() {
       this.getDetails();
   }

   getDetails = async () => {
       const key = this.props.navigation.getParam("key");
       const result = await fetchDetails(key);
       this.setState({details: result})
   }

    render () {
        const { Title, Year, Poster, Rated, Runtime, Director, Actors, Plot, imdbRating, BoxOffice, Awards } = this.state.details;
        return (
            <ScrollView style={styles.container}>
                <Text>Movie Details</Text>
                <Image style={styles.image} 
                    source={{uri: `${Poster}`}}
                />
                <Text>{Title}</Text>
                <Text>{Year}</Text>
                <Text>{Rated}</Text>
                <Text>{Runtime}</Text>
                <Text>{Director}</Text>
                <Text>{Actors}</Text>
                <Text>{Plot}</Text>
                <Text>{imdbRating}</Text>
                <Text>{BoxOffice}</Text>
                <Text>{Awards}</Text>
            </ScrollView>
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
    image: {
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10
    },
    title: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        marginLeft: 5
    },
});

