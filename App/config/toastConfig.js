import {BaseToast} from "react-native-toast-message";

//import constants
import {colors, size} from "../constants/styleConstants";

export const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{borderLeftColor: colors.green}}
            contentContainerStyle={{borderRadius: size.radius}}
            text1Style={{fontSize: size.fontSize}}
        />
    )
};