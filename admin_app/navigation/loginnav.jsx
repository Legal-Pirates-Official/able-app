import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/LoginScreen"; 

const Stack = createNativeStackNavigator();

export default function Loginnav() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}
