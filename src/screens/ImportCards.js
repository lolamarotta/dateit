import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
} from 'react-native';
import Tarjetas from '../components/Tarjetas';
import {getData} from '../api/RandomUser';

class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            importados: [],
            numero: "",
        }
    }


keyExtractor = (item,idx) => idx.toString();

renderItem= ({item}) => {
    return(
        <Tarjetas item={item}/>
    )
}

fetchAPI(numero){
    getData(numero)
    .then(results =>{
        console.log(results);
        this.setState({importados:results})
    })
}

componentDidMount() {
    getData()
     .then(results =>{
         console.log(results);
         this.setState({items:results})
     })
   }



render(){
    return (
    <View style={estiloVista.mainContainer}>
        <TextInput placeholder= "Cuantas tarjetas queres agregar?" onChangeText={ (text) => this.fetchAPI(text)}/>

        <View>
            <FlatList data = {this.state.items} renderItem ={this.renderItem} keyExtractor = {this.keyExtractor}></FlatList>
        </View>

        <FlatList data={this.state.importados} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
    </View>
    )

    }
}

const estiloVista = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 40,
    },
  });


export default ImportCards;