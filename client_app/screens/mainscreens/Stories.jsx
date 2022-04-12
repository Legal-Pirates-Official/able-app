import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
} from "react-native";
import React, {useRef, useState} from "react";
import {Video} from "expo-av";
import ClipsVideos from "../../components/stories/ClipsVideos";
import YoutubeVideos from "../../components/stories/YoutubeVideos";

const Stories = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollView}>
            <ClipsVideos navigation={navigation} />
            <YoutubeVideos />
        </ScrollView>
    );
};

export default Stories;

const styles = StyleSheet.create({
    scrollView: {
        position: "relative",
        backgroundColor: "#1e1e1e",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        marginTop: StatusBar.currentHeight,
    },
});
