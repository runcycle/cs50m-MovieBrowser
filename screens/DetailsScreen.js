import React from "react";
import { StyleSheet, Text, Image, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
        id: this.props.route.params.id,
        movie: null
   }

   getDetails = async (id) => {
        const result = await fetchDetails(id);
        this.setState({ movie: result })
        console.log(this.state.movie)
    }

   componentDidMount() {
       this.getDetails(this.state.id);
   }

    render () {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Text>Movie Details</Text>
                    <Image style={styles.image} 
                        source={{ uri: this.state.movie.Poster }}
                    />
                    <Text>{ this.state.movie.Title }</Text>
                    <Text>{ this.state.movie.Year }</Text>
                    <Text>{ this.state.movie.Rated }</Text>
                    <Text>{ this.state.movie.Runtime }</Text>
                    <Text>{ this.state.movie.Director }</Text>
                    <Text>{ this.state.movie.Actors }</Text>
                    <Text>{ this.state.movie.Plot }</Text>
                    <Text>{ this.state.movie.imdbRating }</Text>
                    <Text>{ this.state.movie.BoxOffice }</Text>
                    <Text>{ this.state.movie.Awards }</Text>
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

