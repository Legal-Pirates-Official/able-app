import {
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    StatusBar,
} from "react-native";
import React from "react";
import CardsComponents from "../../components/about/CardsComponents";
import AwardsComponents from "../../components/about/AwardsComponents";
import {useNavigation} from "@react-navigation/native";

const About = () => {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={{marginTop: StatusBar.currentHeight}}>
                <CardsComponents />
                <AwardsComponents />
            </ScrollView>
        </>
    );
};

export default About;

const styles = StyleSheet.create({});
