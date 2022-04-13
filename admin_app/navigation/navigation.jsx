import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Homeabout from '../screens/mainscreens/Homeabout'
import AboutHome from '../components/about.home'

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={Homeabout}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Abouthome"
                component={AboutHome}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
