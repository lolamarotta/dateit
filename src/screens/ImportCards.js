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
import { getDataFavoritos, storeDataFavoritos, getDataBorrados, storeDataBorrados, getDataRestaurados } from '../../asyncStorage';
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
            itemsRestaurados: [],

        }
    }


keyExtractor = (items,idx) => items.login.uuid.toString();

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

// ACA VAN LOS FILTROS
filtrarNombre(text){

    if (text.length > 0) {
        let buscarNombre = this.state.items.filter( item => {
            let nombre = item.name.first.toUpperCase();
            let inputTexto = text.toUpperCase();
            return nombre.includes(inputTexto)
        });

        this.setState({
            items: buscarNombre,
            text: text
        })

    } else {
        this.setState({
            items: this.state.tarjetasBuscadas
        })
    }
}
filtrarApellido(text){

    if (text.length > 0) {
        let buscarApellido = this.state.items.filter( item => {
            let apellido = item.name.last.toUpperCase();
            let inputTexto = text.toUpperCase();
            return apellido.includes(inputTexto)
        });

        this.setState({
            items: buscarApellido,
            text: text,
        })

    }else {
        this.setState({
            items: this.state.items
        })
    }
}
filtrarPais(text){

    if (text.length > 0) {
        let buscarPais = this.state.items.filter( item => {
            let pais = item.location.country.toUpperCase();
            let inputTexto = text.toUpperCase();
            return pais.includes(inputTexto)
        });

        this.setState({
            items: buscarPais,
            text: text,
        })

    }else {
        this.setState({
            items: this.state.items
        })
    }
}
filtrarCiudad(text){

    if (text.length > 0) {
        let buscarCiudad = this.state.items.filter( item => {
            let ciudad = item.location.city.toUpperCase();
            let inputTexto = text.toUpperCase();
            return ciudad.includes(inputTexto)
        });

        this.setState({
            items: buscarCiudad,
            text: text,
        })

    }else {
        this.setState({
            items: this.state.items
        })
    }
}

componentDidMount() {

    this.unsubscribe = this.props.navigation.addListener('focus', () => {
        this.fetchAPI();
    })
    
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
     getDataRestaurados('@Restaurados')
     .then(resultsRestaurados => {
         this.setState({itemsRestaurados: resultsRestaurados})
     })
   

    }

componentWillUnmount(){
     this.unsubscribe();
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


render(){
    return (
    <View style={estiloVista.mainContainer}>
            <TouchableOpacity onPress={ () => this.clearAsyncStorage()}>
                        <Text>
                         Reset
                        </Text>
                    </TouchableOpacity>
            <TextInput keyboardType="numeric" placeholder= "Cuantas tarjetas queres agregar?" onChangeText={ (text) => this.fetchAPI(text)}/>
            <Text>Buscar/Filtrar Tarjetas</Text>
            <TextInput placeholder="Nombre" onChangeText={ (text) => this.filtrarNombre(text)}></TextInput>
            <TextInput placeholder="Apellido" onChangeText={ (text) => this.filtrarApellido(text)}></TextInput>
            <TextInput placeholder="País" onChangeText={ (text) => this.filtrarPais(text)}></TextInput>
            <TextInput placeholder="Ciudad" onChangeText={ (text) => this.filtrarCiudad(text)}></TextInput>

        
        
        <View style={estiloVista.tarjetasContainer}>
            <FlatList data={this.state.importados} renderItem={this.renderItem} keyExtractor={this.keyExtractor} ></FlatList>
            <FlatList data ={this.state.items} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
            <FlatList data={this.state.itemsRestaurados} renderItem={this.renderItem} keyExtractor={this.keyExtractor}></FlatList>
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