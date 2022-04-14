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
import React, { useEffect } from "react";
import { liveevent, yt } from "../../data/liveevent.data";

import Swipercontainer from "../../components/swipercontainer";
import Gridcont from "../../components/grid/grid";

// import Swipercont from "../../components/swiper";
import {LinearGradient} from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={["#4c669f", "#3b5990", "#1A2026"]}
          style={styles.linearGradient}
        >
          <Image
            style={{
              width: "100%",
              height: "90%",
            }}
            source={require("../../assets/2.jpg")}
          />
          <Text
            style={styles.rajesh}
            onPress={() => navigation.navigate("Second")}
          >
            Dr.Rajesh Fernando
          </Text>
        </LinearGradient>
        {/* <View style={styles.areaone}>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../../assets/2.jpg")}
          />
          <Text
            style={styles.rajesh}
            onPress={() => navigation.navigate("Second")}
          >
            Dr.Rajesh Fernando
          </Text>
        </View> */}
        <View style={styles.areatwo}>
            <View 
                
            style={styles.aboutcontent}>
            <View style={styles.aboutview}>
            <Text style={styles.abouttitle}>About Able</Text>
          </View>
          <Text style={styles.abouttext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius nulla placerat mauris tincidunt ornare. Integer
              ornare ut enim ornare efficitur. Proin sagittis scelerisque
              ultrices. Vivamus viverra malesuada commodo. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Ut sollicitudin magna ut fringilla auctor. Nullam
              finibus efficitur orci eget tincidunt. Sed suscipit efficitur sem.
              Donec sed auctor mi, sit amet iaculis lorem. Morbi varius suscipit
              purus, at lobortis arcu pulvinar in. In congue elit non ligula
              lobortis, vestibulum viverra enim aliquam.
            </Text>
            </View>
          
        </View>
        <Swipercontainer liveevent={liveevent} title={"Live events"} />
        <View style={styles.areatwo}>
          <View style={styles.aboutview}>
            <Text style={styles.aboutable}>About Able</Text>
          </View>
          <View>
            <Gridcont />
          </View>
        </View>
        <Swipercontainer liveevent={yt} title={"Youtube videos"} />
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#81E2D7"
          translucent={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#1A2026",
    paddingBottom: 50,
  },
  linearGradient: {
    flex: 1,
    height: 500,
   
  },
  scrollView: {
    width: width,
  },
  areaone: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#81E2D7",
  },
  areatwo: {
    // height: height / 2,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  abouttitle: {
    color: "#EEEEEE",
    fontFamily: 'notoserif',
    fontSize: 22,
    fontWeight: "700",
    paddingBottom: 10,
  },
  aboutable : {
    color: "#EEEEEE",
    fontFamily: 'sans-serif',
    fontSize: 22,
    // fontWeight: "700",
    borderBottomColor: "#FF70B4",
    borderLeftColor: "#1A2026",
    borderRightColor: "#1A2026",
    borderTopColor: "#FF70B4",
    // borderBottomWidth: 1,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  aboutview: {
    // height: 50,
    // width: width - 30,
    
  },
  aboutcontent: {
    width: width - 22,
    backgroundColor: "rgba(255,255,255,0.05)",
    // opacity: 0.05,
    elevation: 2,
    shadowColor: 'black',
    borderRadius: 10,
    padding: 25,
    borderColor: '#81E2D7',
    borderWidth: 1,
    
  },
  abouttext: {
    color: "#EEEEEE",
    lineHeight: 25,
    opacity: 1,
  },
  rajesh: {
    color: "#EEEEEE",
    fontFamily: 'san-serif',
    fontSize: 28,
    fontWeight: "700",
    padding: 25,
    // position: "absolute",
  },
});

export default Home;
