import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { fetchDetails } from '../api';

export default class DetailsScreen extends React.Component {
    state = {
       input: input,
   }

    render () {
        const MovieCard = ({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Movie Search")}>
                <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={{uri: `${item.poster}`}}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return (
            <View style={styles.container}>
                <Text>Movie Details</Text>
                <View>
                    <MovieCard />
                </View>
            </View>
        )
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

