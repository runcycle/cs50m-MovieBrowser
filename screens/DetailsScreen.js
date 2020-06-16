import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
        movie: null,
        idFromSearch: null
   }
   
   getId = ({ route }) => {
       const { id } = route.params
       this.setState({ idFromSearch: JSON.stringify(id) })
       console.log (this.state.idFromSearch)
   }
   
   getDetails = async () => {
    const result = await fetchDetails(this.state.idFromSearch);
    this.setState({ movie: result })
    console.log(this.state.movie)
    }

    componentDidMount() {
        // this.getId();
        this.getDetails();
    }
    
    render() {
        return (
            <View>
                <Text>id: {this.state.idFromSearch}</Text>
                {/*
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
                */}
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

