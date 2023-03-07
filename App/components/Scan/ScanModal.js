import {ActivityIndicator, StyleSheet} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Animated, Dimensions} from 'react-native';

//import constants
import {colors, size} from "../../constants/styleConstants";

//import components
import ScanResult from "./ScanResult";
import TextButton from "../TextButton";

//import services
import {bookServices} from "../../services/bookServices";

const ScanModal = ({result, setResult}) => {
    const [response, setResponse] = useState(undefined)

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.ValueXY({ x: 0, y: Dimensions.get('window').height })).current;

    const startAnimation = () => {
        Animated.timing(fadeAnim, {toValue: 1, duration: 200, useNativeDriver: true}).start();
        Animated.spring(position, {toValue: {x: 0, y: 0}, speed: 3, useNativeDriver: true}).start();
    }

    useEffect(() => {
        (result !== null && response === undefined) && bookServices.scan(result).then(response => setResponse(response))
        result!== null && startAnimation()
    }, [result])

    const close = () => {
        Animated.timing(fadeAnim, {toValue: 0, duration: 200, useNativeDriver: true,}).start(() => {
            setResult(null);
            setResponse(undefined);
        })
        Animated.spring(position, {toValue: {x: 0, y: Dimensions.get('window').height}, speed: 3, useNativeDriver: true,}).start()
    }

    return (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
            <Animated.View style={[styles.content, {transform: [{translateX: position.x}, {translateY: position.y}]}]}>
                {response !== undefined ?
                    <ScanResult response={response} close={close}/>
                    :
                    <ActivityIndicator style={styles.loader} size="large" color={colors.green}/>
                }
            </Animated.View>

            <Animated.View style={{transform: [{translateX: position.x}, {translateY: position.y}]}}>
                <TextButton style={styles.close} onPress={close} title="Nouvelle recherche"/>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightBlack,
    },
    content: {
        height: 350,
        width: 230,
        backgroundColor: 'white',
        borderRadius: size.radius,
        padding: 10,
    },
    close: {
        marginTop: 40
    },
    loader: {
        flex: 1
    }
});

export default ScanModal