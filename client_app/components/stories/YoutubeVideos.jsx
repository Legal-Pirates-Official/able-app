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
    Linking,
} from "react-native";
import React, {useState, useEffect} from "react";

const YoutubeVideos = () => {
    const [clips, setClips] = useState([
        {
            id: 1,
            image: "https://res.cloudinary.com/prasannarv/image/upload/v1634102496/kqzyaohvknyi6o78tbbw.jpg",
            title: "video 1",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/prasannarv/image/upload/v1634102496/kqzyaohvknyi6o78tbbw.jpg",
            title: "video 2",
        },
    ]);

    return (
        <View>
            <Text style={styles.textHeader}>YoutubeVideos</Text>
            <View style={styles.storiesView}>
                <ScrollView
                    // snapToInterval={width}
                    decelerationRate="fast"
                    horizontal
                >
                    {clips.map((clip) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.cardStories}
                                onPress={() =>
                                    Linking.openURL(
                                        `https://www.youtube.com/watch?v=jmwU1iAC-IE`
                                    )
                                }
                            >
                                <Image
                                    source={{
                                        uri: clip.image,
                                    }}
                                    style={styles.storyThumbnail}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default YoutubeVideos;

const styles = StyleSheet.create({
    textHeader: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    storiesView: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2.2,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    cardStories: {
        position: "relative",
        width: Dimensions.get("window").width / 1.05,
        height: Dimensions.get("window").height / 3,
        borderRadius: 10,
        backgroundColor: "#1e1e1e",
        marginBottom: 10,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        zIndex: 1,
    },
    storyThumbnail: {
        position: "absolute",
        width: Dimensions.get("window").width / 1.05,
        height: Dimensions.get("window").height / 3,
        borderRadius: 10,
        backgroundColor: "#1e1e1e",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        zIndex: 2,
    },
    innerText: {
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        elevation: 27,
        zIndex: 10,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
