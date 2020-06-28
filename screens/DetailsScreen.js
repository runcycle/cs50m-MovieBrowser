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
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.title}>Movie Details</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Title:</Text><Text style={styles.text}>{ this.state.movie.Title }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Year:</Text><Text style={styles.text}>{ this.state.movie.Year }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Rating:</Text><Text style={styles.text}>{ this.state.movie.Rated }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Runtime:</Text><Text style={styles.text}>{ this.state.movie.Runtime }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Director:</Text><Text style={styles.text}>{ this.state.movie.Director }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Starring:</Text><Text style={styles.text}>{ this.state.movie.Actors }</Text>
                        </View>
                        <View style={{flexDirection: "row", flex: 1}}>
                            <Text style={styles.textTitle}>Plot:</Text><Text style={styles.plotText}>{ this.state.movie.Plot }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>imdb Rating:</Text><Text style={styles.text}>{ this.state.movie.imdbRating }</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.textTitle}>Awards:</Text><Text style={styles.text}>{ this.state.movie.Awards }</Text>
                        </View>
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
        width: "45%",
        height: "50%",
        borderWidth: 2,
        borderColor: "black",
        padding: 0,
        marginTop: 0,
        marginBottom: 5,
        alignSelf: "center",
    },
    title: {
        alignSelf: "center",
        paddingTop: 0,
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 10,
    },
    text: {
        color: "black",
        fontSize: 14,
        paddingHorizontal: 5,
        marginBottom: 3,
        textAlign: "center"
      },
    plotText: {
        color: "black",
        fontSize: 14,
        paddingHorizontal: 10,
        marginBottom: 3,
        flex: 1,
        flexWrap: "wrap"
    },
    textTitle: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 10,
        marginBottom: 3,
    }
});

