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
import { getDataFavoritos, storeDataFavoritos, getDataBorrados, storeDataBorrados } from '../../asyncStorage';
import { AppLoading, Font } from 'expo';
import {estiloVista} from '../styles/styles'

class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            importados: [],
            numero: "",
            itemsFavoritos: [],
            itemsBorrados: [],
            items: [],
            fontsLoaded: false,

        }
    }


keyExtractor = (item,idx) => idx.toString();

renderItem= ({item}) => {
    return(
        <Tarjetas item={item} Favoritos={this.tarjetasFavoritas.bind(this)} Borrar={this.borrarTarjetas.bind(this)}/>
    )
}

fetchAPI(numero){
    getData(numero)
    .then(results =>{
        console.log(results);
        this.setState({importados:results})
    })
}

filtrarTarjetas (text){
    getData(text)
    .then(results => {
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
     getDataBorrados("@Borrar")
     .then(resultsBorrados => {
         this.setState({itemsBorrados: resultsBorrados})
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

borrarTarjetas (idPersona){
    console.log(idPersona)
    let resultados = this.state.items.filter((items) => {
        return (idPersona !== items.login.uuid)
    })

    let Borrar = this.state.items.filter((items) => {
        return (idPersona == items.login.uuid)
    })

    let arrayDeBorrar = [... this.state.itemsBorrados, ... Borrar]

    this.setState({items: resultados, itemsBorrados: arrayDeBorrar})

    alert('La tarjeta está en la papelera')

    storeDataBorrados(arrayDeBorrar, '@Borrar')
}

buscarTarjetas = (e) => {
    let tarjetas = this.state.data;
    let nombreFiltrado = tarjetas.filter((item) => {
        return item.name.match(text)
    })

    if( !text || text === '') {
        this.setState
    }
}
// filtrarTarjetas (idPersona){
//     console.log(idPersona)
//     let resultados = this.state.items.filter((items) => {
//         return (idPersona == items.login.uuid)
//     })

//     let arrayBuscar = [... this.state.itemsFiltrados, ... Buscar]

//     this.setState({items: resultados, itemsFiltrados: arrayBuscar})

//     storeDataFiltrados(arrayBuscar, '@Buscar')
// }

render(){
    return (
    <View style={estiloVista.mainContainer}>
        

            <TextInput keyboardType="numeric" placeholder= "Cuantas tarjetas queres agregar?" onChangeText={ (text) => this.fetchAPI(text)}/>
            <Text>Buscar/Filtrar Tarjetas</Text>
            <TextInput placeholder="Nombre" onChange={ (text) => this.filtrarTarjetas(text)}></TextInput>
            <TextInput placeholder="Apellido" onChange={ (text) => this.filtrarTarjetas(text)}></TextInput>
            <TextInput placeholder="País" onChange={ (text) => this.filtrarTarjetas(text)}></TextInput>
            <TextInput placeholder="Ciudad" onChange={ (text) => this.filtrarTarjetas(text)}></TextInput>

        
        
        <View style={estiloVista.tarjetasContainer}>
            <FlatList data={this.state.importados} renderItem={this.renderItem} keyExtractor={this.keyExtractor} ></FlatList>
            <FlatList data ={this.state.items} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
        </View>
    </View>
    )}
    

};

const estiloFormulario = StyleSheet.create ({
    contenedor: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
})


export default ImportCards;