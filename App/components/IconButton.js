import {Pressable, StyleSheet, View} from "react-native";
import React from "react";

const IconButton = ({onPress, children, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Pressable style={styles.button} onPress={onPress}>
                {children}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default IconButton