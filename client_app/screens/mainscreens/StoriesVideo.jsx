import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar,
} from "react-native";
import React, {useRef, useState} from "react";
import {Video} from "expo-av";

const StoriesVideo = ({route}) => {
    const {clip} = route.params;
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* <Text style={styles.textHeader}>Title</Text> */}
                <View>
                    <Video
                        source={{
                            uri: "https://res.cloudinary.com/prasannarv/video/upload/v1624981657/samples/sea-turtle.mp4",
                        }}
                        ref={video}
                        resizeMode="cover"
                        volume={1}
                        useNativeControls={true}
                        style={styles.video}
                        onPlaybackStatusUpdate={(status) => setStatus(status)}
                    />
                </View>
                <ScrollView>
                    <View style={styles.containerDescription}>
                        <Text style={styles.textTitle}>{clip.title}</Text>
                        <Text style={styles.textDescription}>
                            {clip.description}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default StoriesVideo;

const styles = StyleSheet.create({
    scrollView: {
        position: "relative",
        backgroundColor: "#1e1e1e",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    textHeader: {
        position: "relative",
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    video: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3,
    },
    containerDescription: {
        position: "relative",
        width: Dimensions.get("window").width,
        // height: Dimensions.get("window").height / 3,
        paddingHorizontal: 10,
        backgroundColor: "#1e1e1e",
        paddingBottom: 50,
    },
    textTitle: {
        position: "relative",
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 15,
    },
    textDescription: {
        position: "relative",
        color: "#fff",
        fontSize: 15,
        // textAlign: "justify",
        textAlign: "left",
        margin: 15,
    },
});
