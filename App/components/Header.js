import {StyleSheet, Text} from "react-native";
import React from "react";

//import constants
import {colors, size} from "../constants/styleConstants";

const Header = () => {
    return (
        <Text style={styles.text}>Admis.</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Pacifico",
        color: colors.green,
        fontSize: size.fontTitle
    }
});

export default Header