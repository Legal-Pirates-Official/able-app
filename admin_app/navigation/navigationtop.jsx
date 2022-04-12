import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';

import AboutAdmin from '../screens/mainscreens/AboutAdmin';
import ReadStories from '../screens/Stories/ReadStories.screen';
import Meet from '../screens/mainscreens/meet';
import ShowRequests from '../screens/mainscreens/ShowRequests';

const Tab = createMaterialTopTabNavigator();

function Topnavigation() {
	return (
		<Tab.Navigator
			tabBarPosition='bottom'
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: '#e91e63',
				tabBarLabelStyle: { fontSize: 12 },
				// tabBarIndicator: () => null,
				tabBarIndicatorContainerStyle: {
					borderRadius: 20,
					overflow: 'hidden'
				},
				tabBarIndicatorStyle: {
					backgroundColor: '#e91e63',
					overflow: 'hidden',
					top: 0,
					height: 4
				},
				tabBarStyle: {
					backgroundColor: 'powderblue',
					width: '85%',
					alignSelf: 'center',
					borderRadius: 20,
					marginBottom: 10,
					position: 'absolute',
					bottom: 0
				},
				initialRoute: 'Stories',
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let iconsize;

					if (route.name === 'About') {
						iconName = focused ? 'profile' : 'profile';
					} else if (route.name === 'Stories') {
						iconName = focused ? 'clockcircle' : 'clockcircle';
					}

					// You can return any component that you like here!
					return <AntDesign name={iconName} size={20} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
				lazy: true,
				tabBarShowLabel: false
			})}
			tabBarOptions={{
				onTabPress: (e) => {
					console.log(e);
				}
			}}
		>
			<Tab.Screen name='About' component={AboutAdmin} />
			<Tab.Screen name='Stories' component={ReadStories} />
			<Tab.Screen name='Meet' component={Meet} />
			<Tab.Screen name='ShowRequests' component={ShowRequests} />
		</Tab.Navigator>
	);
}

export default Topnavigation;
