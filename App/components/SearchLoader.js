import React from "react";
import LottieView from "lottie-react-native";

const SearchLoader = () => {
    return (
        <LottieView
            source={require("../assets/animations/search.json")}
            autoPlay
        />
    )
}

export default SearchLoader