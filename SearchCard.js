import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/*
Possible Solution:
https://github.com/react-navigation/react-navigation/issues/2198
*/
const SearchCard = props => (
    <View style={styles.row}>
        <Image
            style={styles.image}
            source={{uri: `${props.poster}`}}
        />
        <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.year}>{props.year}</Text>
        </View>
    </View>
);
  

const styles = StyleSheet.create({
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

export default SearchCard