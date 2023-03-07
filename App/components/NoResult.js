import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

//import constants
import {colors, size} from "../constants/styleConstants";

const NoResult = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="sad-outline" color={colors.green} size={25}/>
            <Text style={styles.text}>Aucun résultat...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: size.fontSize,
        marginTop: 20,
        textAlign: "center"
    }
})

export default NoResult