import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Homeabout from '../screens/mainscreens/Homeabout'
import ShowHomeAbout from '../components/showabout.home'
import Showyoutube from '../components/showyoutube.home'
import ShowLiveEvents from '../components/showliveevents.home'
import LoginScreen from '../screens/login/LoginScreen'
import Forgot from "../screens/login/Forgot";

const Stack = createNativeStackNavigator();

const getTabBarVisibility = (route) => {
    console.log('====================================');
    console.log(route.name);
    console.log('====================================');
    const routeName = route.name
      
  
    if (routeName === 'LoginScreen') {
      return false;
    }
  
    return true;
  }



export default function Navigation() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
               options={({ route }) => ({
                headerShown: false,
                    tabBarVisible: getTabBarVisibility(route)
                  })}
                
            />
              <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen
                name="Root"
                component={Homeabout}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Abouthome"
                component={ShowHomeAbout}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Youtubevideo"
                component={Showyoutube}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LiveEvents"
                component={ShowLiveEvents}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
