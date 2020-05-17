import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import MovieCard from "../MovieCard";

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: "Details",
    };

    render () {
        return (
            <View style={styles.container}>
                <Text>Movie Details</Text>
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
    }
});