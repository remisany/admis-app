import React, {useState} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const ToggleIcon = ({First, Second}) => {
    const [active, setActive] = useState(false)

    const onPress = () => {
        setActive(!active)
    }

    const styleNoActive = useAnimatedStyle(() => {
        const scale = active ? withTiming(0, {duration: 100}) : withTiming(1, {duration: 100, delay: 50})
        return {transform: [{scale}]}
    });

    const styleActive = useAnimatedStyle(() => {
        const scale = active ? withTiming(1, {duration: 100, delay: 50}) : withTiming(0, {duration: 100})
        return {transform: [{scale}]};
    });

    return (
        active ?
            <Animated.View style={styleActive}>
                <Second action={onPress}/>
            </Animated.View>
            :
            <Animated.View style={styleNoActive}>
                <First action={onPress}/>
            </Animated.View>
    )
}

export default ToggleIcon

