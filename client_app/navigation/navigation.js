import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/mainscreens/Home";
import About from "../screens/mainscreens/About";
import Second from "../screens/mainscreens/second";
import Settings from "../screens/mainscreens/Settings";
import liveevent from "../data/liveevent.data";
import StoriesVideo from "../screens/mainscreens/StoriesVideo";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Second"
                component={Second}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="StoriesVideo"
                component={StoriesVideo}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
