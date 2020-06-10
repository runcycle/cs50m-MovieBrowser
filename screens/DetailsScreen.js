import React from "react";
import { StyleSheet, Text, Image, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
        movie: movie
   }

    render () {
<<<<<<< HEAD
        //const { navigation } = this.props;
        const { route } = this.props;
        const { movie: params } = route.params;
        const movie = this.state.movie;

        getDetails = async (id) => {
            const result = await fetchDetails(id);
            this.setState({ movie: result })
            console.log(this.state.movie)
        }
        
        if (this.state.movie.imdbID === 0) {
            getDetails(params.imdbID)
        }

        return (
        <Text>id: {JSON.stringify(id)}</Text>
=======
        //const movie = this.state.movie
        //const { navigation } = this.props;

        return (
        <Text>id: {JSON.stringify(this.props.navigation.getParam("id"))}</Text>
>>>>>>> c812f4a0162bae69724771a162f3593fb39bc47a
            /*
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Text>Movie Details</Text>
                    <Image style={styles.image} 
                        source={{ uri: movie.Poster }}
                    />
                    <Text>{ movie.Title }</Text>
                    <Text>{ movie.Year }</Text>
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
            */
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

