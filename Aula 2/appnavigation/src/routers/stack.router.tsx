import {createStackNavigator} from '@react-navigation/stack'
import Profile from '../screens/Profile';
import Message from '../screens/Message';

const Stack = createStackNavigator();

export default function StackRouters(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Profile}
            />
            <Stack.Screen name='teste' component={Message}
            />
        </Stack.Navigator>
    )
}