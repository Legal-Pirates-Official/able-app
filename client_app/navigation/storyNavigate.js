import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StoriesVideo from "../screens/mainscreens/StoriesVideo";
import Stories from "../screens/mainscreens/Stories";

const Stack = createNativeStackNavigator();

export default function StoryNavigation() {
    return (
        <Stack.Navigator initialRouteName="Stories">
            <Stack.Screen
                name="Stories"
                component={Stories}
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
