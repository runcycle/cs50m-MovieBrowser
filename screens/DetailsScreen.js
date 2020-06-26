import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
        id: this.props.route.params.id,
        movie: {}
    }
   

    getDetails = async (id) => {
        const result = await fetchDetails(id)
        this.setState({ movie: result })
        console.log(this.state.movie)
    }

    componentDidMount() {
        this.getDetails(this.state.id)
    }

    componentDidUpdate() {
        this.props.navigation.setOptions({ title: this.state.movie.Title });
      }
    
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} 
                            source={{ uri: this.state.movie.Poster }}
                        />
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Movie Details</Text>
                        <Text style={styles.text}>{ this.state.movie.Title }</Text>
                        <Text style={styles.text}>{ this.state.movie.Year }</Text>
                        <Text style={styles.text}>{ this.state.movie.Rated }</Text>
                        <Text style={styles.text}>{ this.state.movie.Runtime }</Text>
                        <Text style={styles.text}>{ this.state.movie.Director }</Text>
                        <Text style={styles.text}>{ this.state.movie.Actors }</Text>  
                        <Text style={styles.text}>{ this.state.movie.Plot }</Text>
                        <Text style={styles.text}>{ this.state.movie.imdbRating }</Text>
                        <Text style={styles.text}>{ this.state.movie.BoxOffice }</Text>
                        <Text style={styles.text}>{ this.state.movie.Awards }</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffa200",
        paddingTop: Constants.statusBarHeight,
    },
    image: {
        width: "50%",
<<<<<<< HEAD
        height: "60%",
=======
        height: "50%",
>>>>>>> 245d319ca3d0ef20c838f01ed158c83d106be689
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        marginTop: 25,
        marginBottom: 20,
        alignSelf: "center",
    },
    title: {
        alignContent: "center",
        paddingTop: 5,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 5,
        marginLeft: 8,
    },
    text: {
        color: "black",
        fontSize: 12,
        paddingHorizontal: 10,
        marginBottom: 3,
      },
});

