import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";

// imported screens
import Home from "../screens/mainscreens/Home";
import About from "../screens/mainscreens/About";
import Interaction from "../screens/mainscreens/Interaction";
import Stories from "../screens/mainscreens/Stories";
import StoriesVideo from "../screens/mainscreens/StoriesVideo";
import StoryNavigation from "./storyNavigate";

const Tab = createMaterialTopTabNavigator();

function Topnavigation() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#e91e63",
                swipeEnabled: false,
                tabBarLabelStyle: {fontSize: 12},
                // tabBarIndicator: () => null,
                tabBarIndicatorContainerStyle: {
                    borderRadius: 20,
                    overflow: "hidden",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#e91e63",
                    overflow: "hidden",
                    top: 0,
                    height: 4,
                },
                tabBarStyle: {
                    backgroundColor: "#336DF5",
                    width: "85%",
                    alignSelf: "center",
                    borderRadius: 20,
                    marginBottom: 10,
                    position: "absolute",
                    bottom: 0,
                },
                initialRoute: "Home",
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let iconsize;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "Stories") {
                        iconName = focused ? "easel" : "easel";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "About") {
                        iconName = focused
                            ? "body"
                            : "body";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "profile") {
                        iconName = focused
                            ? "people-outline"
                            : "people-outline";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "Interaction") {
                        iconName = focused
                            ? "chatbubbles"
                            : "chatbubbles";
                        iconsize = focused ? 25 : 20;
                    }
 
                    // You can return any component that you like here!
                    return (
                        <Ionicons
                            name={iconName}
                            size={iconsize}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "rgb(77, 77, 77)",
                lazy: true,
                tabBarShowLabel: false,
            })}
            tabBarOptions={{
                onTabPress: (e) => {
                    console.log(e);
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Stories" component={StoryNavigation} />
            <Tab.Screen name="Interaction" component={Interaction} />
        </Tab.Navigator>
    );
}

export default Topnavigation;

const Styles = StyleSheet.create({
    navbar: {
        borderRadius: 20,
        width: "80%",
    },
});
