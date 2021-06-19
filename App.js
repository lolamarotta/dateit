import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import ImportCards from './src/screens/ImportCards';
import Header from './src/components/Header';
import Menu from './src/screens/Menu';
import BottomNav from './src/components/BottomNav';
// import Contenedor from './src/components/Contenedor';


class App extends Component{
  render(){
    return(
      <View>
        
        <Header/>
        <ImportCards/>
        <NavigationContainer>
          <BottomNav/>
        </NavigationContainer> 
        
      </View>
    )
  }
}

export default App;