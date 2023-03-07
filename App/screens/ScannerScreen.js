import React, {useState} from 'react';
import {View, StyleSheet, Vibration} from 'react-native';
import {Camera} from "expo-camera";
import {useIsFocused} from "@react-navigation/native";

//import components
import Permission from "../components/Permission";
import ScanModal from "../components/Scan/ScanModal";

const ScannerScreen = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [result, setResult] = useState(null);
    const focused = useIsFocused()

    const handleBarCodeScanned = ({data}) => {
        Vibration.vibrate(30)
        setResult(data);
    }

    if (!permission) {
        return <View/>;
    }

    if (!permission.granted) {
        return <Permission requestPermission={requestPermission}/>
    }

    return (
        <View style={styles.container}>
            {focused && <Camera
                onBarCodeScanned={result ? undefined : handleBarCodeScanned}
                ratio='16:9'
                style={StyleSheet.absoluteFillObject}
            />}
            <ScanModal result={result} setResult={setResult}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default ScannerScreen;