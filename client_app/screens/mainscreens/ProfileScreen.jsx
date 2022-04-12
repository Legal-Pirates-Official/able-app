import {StyleSheet, Text, View, TouchableOpacity, Button} from "react-native";
import React, {useEffect} from "react";


import {auth} from "../../firebase/firebase";
const Home = ({navigation}) => {
    const handleSubmit = () => {
        console.log("logout");
        auth.signOut()
            .then(() => {
                navigation.push("LoginScreen");
            })
            .catch((error) => {
                console.log(error, "error");
            });
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Logout</Text>
                <Button title="Logout" onPress={handleSubmit} />
            </View>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
    },
});
