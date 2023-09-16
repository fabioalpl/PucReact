import {NavigationContainer} from '@react-navigation/native'

import DrawerRouters from './drawer.routers'

export default function Routers(){
    return(
        <NavigationContainer>
           {/* <TabRouters/> */}
           <DrawerRouters/>
        </NavigationContainer>
    )
}