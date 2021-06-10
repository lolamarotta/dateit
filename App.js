import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import ImportCards from './src/screens/ImportCards';
import Header from './src/components/Header';
// import Contenedor from './src/components/Contenedor';


class App extends Component{
  render(){
    return(
      <View>
        
        <Header/>
        <ImportCards/>
        
      </View>
    )
  }
}

export default App;