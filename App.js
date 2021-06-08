import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
// import Buscar from './components/Buscar';
// import Tarjetas from './components/Tarjetas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImportCards from './src/screens/ImportCards';

class App extends Component{
  render(){
    return(
        <ImportCards/>
    )
  }
}

export default App;