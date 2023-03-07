import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Feather} from '@expo/vector-icons';

//import components
import TextButton from "./TextButton";

//import constants
import {colors, size} from "../constants/styleConstants";

const Permission = ({requestPermission}) => {
    return (
        <View style={styles.container}>
            <Feather name="camera-off" color={colors.green} size={25}/>
            <Text style={styles.text}>Il est nécessaire d'autoriser l'application à utiliser la caméra de votre appareil.</Text>
            <TextButton style={styles.button} onPress={requestPermission} title="Autoriser"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: size.fontSize,
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    button: {
        flex: 1
    }
})

export default Permission;