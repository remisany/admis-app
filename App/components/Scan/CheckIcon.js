import React from "react";
import {Ionicons} from "@expo/vector-icons";

//import components
import ToggleIcon from "../ToggleIcon";

//import constants
import {colors} from "../../constants/styleConstants";
import Toast from "react-native-toast-message";

const CheckIcon = ({close}) => {
    const addBook = () => {
        Toast.show({
            type: 'success',
            text1: 'Livre ajouté dans « Lu »',
            onHide: () => close()
        })
    }

    const removeBook = () => {
        console.log("enlevé")
    }

    return (
        <ToggleIcon
            First={(props) => <Ionicons
                name="checkmark-circle-outline"
                size={40}
                color="black"
                onPress={() => {
                    addBook()
                    props.action()
                }}
                {...props}
            />}
            Second={(props) => <Ionicons
                name="checkmark-circle"
                size={40}
                color={colors.green}
                onPress={() => {
                    removeBook()
                    props.action()
                }}
                {...props}
            />}
        />
    )
}

export default CheckIcon