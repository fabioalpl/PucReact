import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import Feed from '../screens/Feed';
import New from '../screens/New'; 
import Conf from '../screens/Conf';

const Tab = createBottomTabNavigator(); 

export default function TabRouters(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='feed' component={Feed} options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Inicio',
            }}
            />
            <Tab.Screen name='new' component={New} options={{
                tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size} />,
                tabBarLabel: 'Novo',
            }}
            />
            <Tab.Screen name='conf' component={Conf} options={{
                tabBarIcon: ({color, size}) => <Feather name='settings' color={color} size={size} />,
                tabBarLabel: 'Configurações',
            }}
            />
        </Tab.Navigator>
    )
}

 