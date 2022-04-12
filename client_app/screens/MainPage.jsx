import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import NavigationTop from "..//navigation/navigationtop";

export default function App() {
    return <NavigationTop />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
