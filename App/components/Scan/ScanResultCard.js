import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Feather, Ionicons} from '@expo/vector-icons';

//import constants
import {colors, size} from "../../constants/styleConstants";

//import components
import CheckIcon from "./CheckIcon";

const ScanResultCard = ({response, close}) => {
    return (
        <View style={styles.container}>
            {response.image ?
                <Image style={styles.image} source={{uri: response.image}}/>
                :
                <View style={styles.noImage}>
                    <Feather name="camera-off" color={colors.green} size={25}/>
                </View>
            }
            <View style={styles.content}>
                <Text style={styles.title}>{response.title}</Text>
                <Text style={styles.text}>{response.authors}</Text>
                <View style={styles.iconContainer}>
                    <CheckIcon close={close}/>
                    <Ionicons name="add-circle-outline" size={40} color="black"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: "100%",
        width: 210,
        resizeMode: "cover",
        borderTopRightRadius: size.radius,
        borderTopLeftRadius: size.radius
    },
    noImage: {
        marginTop: -100
    },
    content: {
        position: "absolute",
        backgroundColor: colors.white,
        width: "100%",
        bottom: 0
    },
    title: {
        fontSize: size.fontTitle,
        fontWeight: 900,
        marginTop: 10
    },
    text: {
        fontSize: size.fontSize
    },
    iconContainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

export default ScanResultCard