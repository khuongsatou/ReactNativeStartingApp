import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:'GameZone',
            // headerStyle:{
            //     //backgroundColor:'#456',
            // },
            headerTitleStyle: {
                fontWeight: 'italic',
                color:'#fff'
            },
        }
    },
    About:{
        screen:About
    },
    ReviewDetails:{
        screen:ReviewDetails
    },
   
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor:'#345' },
        headerTitleStyle:{ color:'#fff' }
    }
});
export default createAppContainer(HomeStack);