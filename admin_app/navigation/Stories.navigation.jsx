import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ReadStories from "../screens/Stories/ReadStories.screen";
import UpdateStories from "../screens/Stories/UpdateStories.screen";
import InsertStories from "../screens/Stories/InsertStories.screen";

const Stack = createNativeStackNavigator();

export function StoriesNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Read"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Read" component={ReadStories} />
            <Stack.Screen name="Update" component={UpdateStories} />
            <Stack.Screen name="Insert" component={InsertStories} />
        </Stack.Navigator>
    );
}
