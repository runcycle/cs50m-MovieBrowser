import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MovieCard extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.navigateDetailScreen(this.props.imdbID)}>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={{uri: this.props.poster}}
                        />
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text style={styles.year}>{this.props.year}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

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