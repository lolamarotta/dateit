import 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import ImportCards from '../screens/ImportCards';
// import Papelera from '../screens/Papelera';
// import About from '../screens/About';
import Favoritos from '../screens/Favoritos';

// Tab Versión 4
const Tab = createBottomTabNavigator(
    {
        Home:  {screen: ImportCards},
        Favoritos: {screen: Favoritos},
    },
    {
        initialRouteName: "Home",
        animationEnabled: true,
        tabBarOptions: {
            showLabel: true,
            style: {
                height: 800,
                backgroundColor: "red",
                position: "absolute"}
        }
    }
);

export default createAppContainer(Tab);