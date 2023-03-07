import React, {Fragment} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useFonts} from "expo-font";
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from "react-native-toast-message";

//import screens
import HomeScreen from "./screens/HomeSreen";
import ScannerScreen from "./screens/ScannerScreen";
import SearchScreen from "./screens/SearchScreen";

//import components
import Header from "./components/Header";

//import constants
import {colors} from "./constants/styleConstants";

//import config
import {toastConfig} from "./config/toastConfig";
import './config/firebaseConfig';

const Tab = createBottomTabNavigator();

const App = () => {
    const [fontsLoaded] = useFonts({
        'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Fragment>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        tabBarActiveTintColor: colors.green,
                        tabBarShowLabel: false,
                    }}
                >
                    <Tab.Screen
                        name="Home" component={HomeScreen}
                        options={{
                            headerTitle: () => <Header/>,
                            headerStyle: {height: 90},
                            tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color} size={25}/>
                        }}
                    />

                    <Tab.Screen
                        name="Scanner"
                        component={ScannerScreen}
                        options={{
                            headerTitle: () => <Header/>,
                            headerStyle: {height: 90},
                            tabBarIcon: ({color}) => <Ionicons name="scan-outline" color={color} size={25}/>
                        }}
                    />

                    <Tab.Screen
                        name="Search"
                        component={SearchScreen}
                        options={{
                            headerTitle: () => <Header/>,
                            headerStyle: {height: 90},
                            tabBarIcon: ({color}) => <Ionicons name="search-outline" color={color} size={25}/>
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
            <Toast
                position='bottom'
                bottomOffset={80}
                visibilityTime={1000}
                config={toastConfig}
            />
        </Fragment>
    )
}

export default App