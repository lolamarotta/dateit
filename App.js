import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* Screeens */
import ImportCards from './src/screens/ImportCards';
import Favoritos from './src/screens/Favoritos';
import Papelera from './src/screens/Papelera';
// import About from './src/screens/About';

/* Components */
import BottomNav from './src/components/BottomNav';

const Drawer = createDrawerNavigator();

class App extends Component{

  //  async loadFonts() {
  //   await Font.loadAsync({
  //     Poppins: require('./src/assets/fonts/Poppins-Medium.ttf'),

  //     // Any string can be used as the fontFamily name. Here we use an object to provide more control
  //     'Poppins-Bold': {
  //       uri: require('./src/assets/fonts/Poppins-Bold.ttf'),
  //       display: Font.FontDisplay.FALLBACK,
  //     },
  //   });
  //   this.setState({ fontsLoaded: true });
  // }

  // componentDidMount() {
  //   this.loadFonts();
  // }
  
  render(){
    return(
      // <NavigationContainer>
      //   <Drawer.Navigator 
      //           initialRouteName="Home"
      //           drawerPosition="left"
      //           drawerType="back"
      //           overlayColor='grey'
      //           drawerStyle={{
      //             backgroundColor:'orange',
      //             width: 200,
      //           }}
      //           drawerContentOptions={{
      //             actitiveBackgroundColor:'grey',
      //             activeTintColor: 'white',
      //             inactiveTintColor: 'black',
      //           }}
      //         >
      //       <Drawer.Screen name="Home" component={ImportCards}/>
      //       <Drawer.Screen name="Favoritos" component={Favoritos}/>
      //       <Drawer.Screen name="Papelera" component={Papelera}/>
      //       {/* <Drawer.Screen name="Acerca de..." component={About}/> */}
      //     </Drawer.Navigator>
        
      //   </NavigationContainer>
      <NavigationContainer>
        <BottomNav/>
      </NavigationContainer>
    )
  }
}

const Styles = StyleSheet.create({
  general: {
    // fontFamily: "Poppins"
  }
})

export default App;