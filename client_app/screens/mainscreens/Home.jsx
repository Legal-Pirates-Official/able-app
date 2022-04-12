import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    StatusBar,
} from "react-native";
import React, {useEffect} from "react";
import liveevent from "../../data/liveevent.data";
import Swipercontainer from "../../components/swipercontainer";
import Gridcont from "../../components/grid/grid";

// import Swipercont from "../../components/swiper";

const {width, height} = Dimensions.get("window");

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.areaone}>
                    <Text onPress={() => navigation.navigate("Second")}>
                        Dr.Rajesh Fernando
                    </Text>
                </View>
                <View style={styles.areatwo}>
                    <View style={styles.aboutview}>
                        <Text style={styles.abouttitle}>About Able</Text>
                    </View>
                    <View style={styles.aboutcontent}>
                        <Text style={styles.abouttext}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius nulla placerat mauris
                            tincidunt ornare. Integer ornare ut enim ornare
                            efficitur. Proin sagittis scelerisque ultrices.
                            Vivamus viverra malesuada commodo. Class aptent
                            taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Ut sollicitudin
                            magna ut fringilla auctor. Nullam finibus efficitur
                            orci eget tincidunt. Sed suscipit efficitur sem.
                            Donec sed auctor mi, sit amet iaculis lorem. Morbi
                            varius suscipit purus, at lobortis arcu pulvinar in.
                            In congue elit non ligula lobortis, vestibulum
                            viverra enim aliquam.
                        </Text>
                    </View>
                </View>
                <Swipercontainer liveevent={liveevent} title={"Live events"} />
                <View style={styles.areatwo}>
                    <View style={styles.aboutview}>
                        <Text style={styles.abouttitle}>About Able</Text>
                    </View>
                    <View>
                        <Gridcont />
                    </View>
                </View>
                <Swipercontainer
                    liveevent={liveevent}
                    title={"Youtube videos"}
                />
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#FDD460"
                    translucent={true}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#000",
        paddingBottom: 50,
    },
    scrollView: {
        width: width,
    },
    areaone: {
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FDD460",
    },
    areatwo: {
        height: height / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FDD460",
    },
    abouttitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },
    aboutview: {
        height: 50,
        width: width - 30,
    },
    aboutcontent: {
        width: width - 60,
    },
    abouttext: {
        color: "#fff",
    },
});

export default Home;
