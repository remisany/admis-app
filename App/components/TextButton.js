import {StyleSheet, Text, TouchableHighlight} from "react-native";
import React from "react";

//import constants
import {colors, size} from "../constants/styleConstants";

const TextButton = ({onPress, title, style}) => {
    return (
        <TouchableHighlight underlayColor={colors.lightGreen} activeOpacity={1} style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size.radius
    },
    text: {
        color: colors.white,
        fontSize: size.fontSize
    }
});

export default TextButton