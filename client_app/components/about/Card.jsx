import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useEffect, useRef, useState} from "react";

const CardComponent = ({award, index}) => {
    // const [direction, setDirection] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [indexValue, setindexValue] = useState(index);
    const [even, setEven] = useState(false);

    useEffect(() => {
        indexValue % 2 === 0 ? setEven(true) : setEven(false);
        Animated.timing(shadow_Container_Width, {
            toValue: pressed ? 0 : even ? 150 : -150,
            // toValue: pressed ? 0 : -150,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(main_Container_Width, {
            toValue: pressed
                ? even
                    ? Dimensions.get("window").width - 70
                    : -(Dimensions.get("window").width - 70)
                : 0,
            // toValue: pressed ? -(Dimensions.get("window").width - 70) : 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [pressed]);

    const shadow_Container_Width = useRef(new Animated.Value(150)).current;
    const main_Container_Width = useRef(
        new Animated.Value(Dimensions.get("window").width - 50)
    ).current;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.upperContainer,
                    {
                        transform: [
                            {
                                translateX: main_Container_Width,
                            },
                        ],
                    },
                ]}
                activeOpacity={0.8}
                onPress={() => {
                    setPressed(true);
                }}
            >
                <Animated.View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={{uri: award.card_image}}
                    />
                    <Text style={styles.text}>{award.card_title}</Text>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setPressed(false);
                }}
                style={[
                    styles.shadowContainer,
                    {
                        transform: [
                            {
                                translateX: shadow_Container_Width,
                            },
                        ],
                    },
                ]}
            >
                <Animated.View style={styles.description}>
                    {pressed ? (
                        <Text
                            style={[
                                styles.descriptionText,
                                {left: even ? 0 : 30},
                            ]}
                        >
                            {award.card_description}
                        </Text>
                    ) : null}
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: Dimensions.get("window").height / 2.4,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    upperContainer: {
        position: "absolute",
        height: Dimensions.get("window").height / 3.2,
        width: Dimensions.get("window").width - 50,
        borderRadius: 10,
        backgroundColor: "#FF809E",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10,
    },
    shadowContainer: {
        position: "absolute",
        height: Dimensions.get("window").height / 2.5,
        width: Dimensions.get("window").width - 20,
        right: 0,
        // left: -Dimensions.get("window").width / 1.2,
        borderRadius: 10,
        backgroundColor: "#B39CD0",
        margin: 10,
    },

    imageView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: Dimensions.get("window").height / 4.2,
        width: Dimensions.get("window").width / 1.3,
        borderRadius: 10,
    },
    description: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
        paddingRight: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 8,
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "justify",
        marginVertical: 8,
        marginLeft: 10,
    },
});
