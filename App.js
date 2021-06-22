import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';



import ImportCards from './src/screens/ImportCards';
import Header from './src/components/Header';
// import Menu from './src/screens/Menu';
// import BottomNav from './src/components/BottomNav';
import TabNav from './src/components/TabNav';
// import Contenedor from './src/components/Contenedor';


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
      <View>
        <Header/>
        <TabNav/>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  general: {
    // fontFamily: "Poppins"
  }
})

export default App;