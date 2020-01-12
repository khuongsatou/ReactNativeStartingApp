import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
const screens = {
    About:{
        screen:About
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ backgroundColor:'#345' },
        headerTitleStyle:{ color:'#fff' }
    }
});
export default AboutStack;