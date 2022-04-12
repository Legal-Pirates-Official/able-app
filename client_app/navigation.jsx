import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "./screens/login/LoginScreen";
import MainPage from "./screens/MainPage";
import RegisterScreen from "./screens/login/RegisterScreen";
import ProfileScreen from "./screens/mainscreens/ProfileScreen";
import Home from "./screens/mainscreens/Home";

import AdminMainPage from "./screens/AdminMainPage";
import AboutAdmin from "./screens/admin/AboutAdmin";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const NavigationSignUp = () => {
    return (
        <>
            <NavigationContainer
                initialRouteName="LoginScreen"
                screenOptions={screenOptions}
            >
                <Stack.Navigator>
                    <Stack.Screen
                        name="MainPage"
                        component={MainPage}
                        options={screenOptions}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={screenOptions}
                    />
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={screenOptions}
                    />
                    <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                        options={screenOptions}
                    />
                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={screenOptions}
                    />
                    <Stack.Screen
                        name="AdminMainPage"
                        component={AdminMainPage}
                        options={screenOptions}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default NavigationSignUp;

const styles = StyleSheet.create({});
