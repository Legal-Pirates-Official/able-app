import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import Card from "./Card";
import {getAbout} from "../../axios/about";

const AwardsComponents = () => {
    // const [awards, setAwards] = useState(AwardsDetails());
    const [awards, setAwards] = useState();

    useEffect(async () => {
        await getAbout().then((res) => {
            console.log(res, "awards");
            setAwards(res.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={awards}
                renderItem={({item, index}) => {
                    return <Card award={item} index={index} />;
                }}
                keyExtractor={(item) => item.id}
            />
            {/* {awards &&
                awards.map((award) => {
                    console.log(award);
                    return <Card award={award} />;
                })} */}
        </View>
    );
};

export default AwardsComponents;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
        backgroundColor: "#000",
    },
});
