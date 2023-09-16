import {createDrawerNavigator} from '@react-navigation/drawer'
import {Feather} from '@expo/vector-icons'

import TabRouters from './Tab.routers'
import StackRouters from './stack.router';
import Message from '../screens/Message';

const Drawer = createDrawerNavigator();

export default function DrawerRouters(){
    return (
        <Drawer.Navigator screenOptions={{title:"Menu"}}>
            <Drawer.Screen name='home' component={TabRouters}
            options={{
                drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                drawerLabel: 'Início',
            }}/>
            <Drawer.Screen name='profile' component={StackRouters}
            options={{
                drawerIcon: ({color, size}) => <Feather name='user' color={color} size={size} />,
                drawerLabel: 'Meu Perfil',
            }}/>
            <Drawer.Screen name='teste' component={Message}
            options={{
                drawerIcon: ({color, size}) => <Feather name='message-circle' color={color} size={size} />,
                drawerLabel: 'Mensagens',
            }}/>
        </Drawer.Navigator>
    )
}