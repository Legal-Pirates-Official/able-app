import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import Topnavigation from "./navigation/navigationtop";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginnav from "./navigation/loginnav";
import { AuthContext } from "./components/context";
import Navigation from "./navigation/navigation";
import Homeabout from "./screens/mainscreens/Homeabout";
import LoginScreen from "./screens/login/LoginScreen";
import Forgot from "./screens/login/Forgot";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const authContext = useMemo(() => ({
     
      signIn: (loginuser) => {
        setIsLoading(false);
        setUser(loginuser);
        setIsLoggedIn(true);
      },
      signOut: () => {
        setIsLoggedIn(false);
        setUser(null);
        setIsLoading(false);
        console.log("signout");
      },
      signUp: (loginuser) => {
        setIsLoading(false);
        setUser(loginuser);
        setIsLoggedIn(true);
      },
    }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color="black" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={
          {
            headerShown: false,
          }
        }/>
        <Stack.Screen name="TabsStack" component={Topnavigation} options={
          {
            headerShown: false,
          }
        }/>
        <Stack.Screen name="Forgot" component={Forgot} options={
          {
            headerShown: false,
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
