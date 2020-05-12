import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
//import { NavigationContainer } from './node_modules/@react-navigation/native';
//import { createStackNavigator } from './node_modules/@react-navigation/stack';
//import MovieCard from "../MovieCard";

export default class DetailsScreen extends React.Component {
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