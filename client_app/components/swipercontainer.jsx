import {StyleSheet, Text, View, Dimensions} from "react-native";
import React from "react";
// import liveevent from "../data/liveevent.data";
import Swipercont from "./swiper";

const {width, height} = Dimensions.get("window");

const Swipercontainer = (props) => {
    
    const {liveevent, title} = props;
    return (
        <View style={styles.areatwo}>
            <View style={styles.aboutheadcontainer}>
                <Text style={styles.abouthead}>{title}</Text>
            </View>
            <Swipercont datas={liveevent} />
        </View>
    );
};

export default Swipercontainer;

const styles = StyleSheet.create({
    areatwo: {
        height: 400,
        alignItems: "center",
    },
    aboutheadcontainer: {
        height: 65,
        width: width - 10,
    },
    abouthead: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 10,
        paddingLeft: 20,

    },
});
