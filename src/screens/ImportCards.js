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
import { getDataFavoritos, storeDataFavoritos } from '../../asyncStorage';
import { AppLoading, Font } from 'expo';

class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            importados: [],
            numero: "",
            itemsFavoritos: [],
            items: [],
            fontsLoaded: false,

        }
    }


keyExtractor = (item,idx) => idx.toString();

renderItem= ({item}) => {
    return(
        <Tarjetas item={item} Favoritos={this.tarjetasFavoritas.bind(this)}/>
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
    // Font.loadAsync( {
    //     'Poppins': require('../assets/fonts/Poppins-Medium.ttf')
    //     }).then( () => this.setState( { fontsLoaded: true } ) )
    
    getData(1)
     .then(results =>{
         console.log(results);
         this.setState({items:results})
     })

     getDataFavoritos("@Favoritos")
     .then(resultsFavoritos => {
         this.setState({itemsFavoritos: resultsFavoritos})
     })
   }


tarjetasFavoritas (idPersona){
    console.log(idPersona)
    let resultados = this.state.items.filter((items) => {
        return (idPersona !== items.login.uuid)
    })

    let Favoritos = this.state.items.filter((items) => {
        return (idPersona == items.login.uuid)
    })

    let arrayDeFavoritos = [... this.state.itemsFavoritos, ... Favoritos]

    this.setState({items: resultados, itemsFavoritos: arrayDeFavoritos})

    alert('Se guardó la tarjeta')

    storeDataFavoritos(arrayDeFavoritos, '@Favoritos')
}

render(){
    return (
    <View style={estiloVista.mainContainer}>
        <TextInput placeholder= "Cuantas tarjetas queres agregar?" onChangeText={ (text) => this.fetchAPI(text)}/>
        
        <View style={estiloVista.tarjetasContainer}>
            <FlatList data={this.state.importados} renderItem={this.renderItem} keyExtractor={this.keyExtractor} ></FlatList>
            <FlatList data ={this.state.items} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
        </View>
    </View>
    )

    }
}

const estiloVista = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%",
        alignItems: "center",

    },  
    tarjetasContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    }
  });


export default ImportCards;