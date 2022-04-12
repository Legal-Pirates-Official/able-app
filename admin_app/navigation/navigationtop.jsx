import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import AboutAdmin from "../screens/mainscreens/AboutAdmin";
import InsertStories from "../screens/Stories/InsertStories.screen";
import {StoriesNavigator} from "./Stories.navigation";

const Tab = createMaterialTopTabNavigator();

function Topnavigation() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#e91e63",
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
                    backgroundColor: "powderblue",
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
                        iconName = focused ? "stories" : "stories";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "About") {
                        iconName = focused
                            ? "information-outline"
                            : "information-outline";
                        iconsize = focused ? 25 : 20;
                    } else if (route.name === "profile") {
                        iconName = focused
                            ? "people-outline"
                            : "people-outline";
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
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                lazy: true,
                tabBarShowLabel: true,
            })}
            tabBarOptions={{
                onTabPress: (e) => {
                    console.log(e);
                },
            }}
        >
            <Tab.Screen name="AboutAdmin" component={AboutAdmin} />
            <Tab.Screen name="StoriesAdmin" component={StoriesNavigator} />
            <Tab.Screen name="Insert" component={InsertStories} />
        </Tab.Navigator>
    );
}

export default Topnavigation;
