import React from "react";
import { StyleSheet, Text, Image, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
        movie: movie,
   }

    render () {
        // const { Title, Year, Poster, Rated, Runtime, Director, Actors, Plot, imdbRating, BoxOffice, Awards } = this.state.details;
        const { route } = this.props
        const { movie } = route.params
        const movie = this.state.movie
        
        /*
        componentDidMount() {
            this.getDetails();
        }
        */
     
        getDetails = async (id) => {
            const result = await fetchDetails(id);
            this.setState({ movie: result })
            console.log(this.state.movie)
        }
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Text>Movie Details</Text>
                    <Image style={styles.image} 
                        source={{ uri: params.Poster }}
                    />
                    <Text>{ params.Title }</Text>
                    <Text>{ params.Year }</Text>
                    <Text>{ movie.Rated }</Text>
                    <Text>{ movie.Runtime }</Text>
                    <Text>{ movie.Director }</Text>
                    <Text>{ movie.Actors }</Text>
                    <Text>{ movie.Plot }</Text>
                    <Text>{ movie.imdbRating }</Text>
                    <Text>{ movie.BoxOffice }</Text>
                    <Text>{ movie.Awards }</Text>
                </ScrollView>
            </SafeAreaView>
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

