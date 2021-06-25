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
    Image,
    Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Componentes
import Tarjetas from '../components/Tarjetas';
import {getData} from '../api/RandomUser';
import { getDataFavoritos, storeDataFavoritos, getDataBorrados, storeDataBorrados, getDataRestaurados } from '../../asyncStorage';

//Estilos
import {estiloVista} from '../styles/styles';
import { Easing } from 'react-native-reanimated';


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
            restaurados: [],
            toValue: 200,

        }
    }


keyExtractor = (items,idx) => items.login.uuid.toString();

renderItem= ({item}) => {
    return(
        <Tarjetas item={item} Favoritos={this.tarjetasFavoritas.bind(this)} Borrar={this.borrarTarjetas.bind(this)}/>
    )
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

clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

/* DATOS DE API, IMPORTADOS Y RESTAURADOS */
// Datos de API -> items
componentDidMount() {

    this.unsubscribe = this.props.navigation.addListener('focus', () => {
        this.fetchAPI(), this.fetchRestaurados(), this.fetchRestaurados();
    })
    
    getData(10)
        .then(resultsApi =>{
            console.log(resultsApi);
            this.setState({items: resultsApi})
        })

    

    }

componentWillUnmount(){
     this.unsubscribe();
}

// Datos de Importados -> importados
fetchAPI(numero){
    getData(numero)
    .then(resultsImportados =>{
        console.log(resultsImportados);
        this.setState({importados: resultsImportados})
    })
}

// Datos de Restaurados -> restaurados
fetchRestaurados(){
    getDataRestaurados('@Restaurados')
     .then(resultsRestaurados => {
         this.setState({restaurados: resultsRestaurados})
     })
}

/* SELECCIONAR TARJETAS */
// Guardar Tarjetas 
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

// Borrar tarjetas
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

// ANIMACION
// position = new Animated.Value(10);

// topDown = () => {
//     Animated.timing(this.position,{
//         toValue: this.state.toValue,
//         duration: 1000,
//         useNativeDriver: false,
//         easing: Easing.bounce,
//     }).start();
// }


render(){
    return (
    <View style={estiloVista.mainContainer}>
            
            {/* <Image source={require('../images/logo.png')}></Image> */}
            

            {/* <Animated.View style={{
                    top: this.position,
                    width: 300,
                    height:70,
                    textAlign: 'center',}}> */}
            <View style={estiloVista.contenedorTitulo}>
                <Text style={estiloVista.titulo}>dateIt</Text>
            </View>
                
            {/* </Animated.View> */}
           

            <View style={estiloVista.contenedorFrom}>
                <Text style={estiloVista.tituloForm}>Agregar Tarjetas</Text>
                <TextInput keyboardType="numeric" placeholder= "Cuantas queres agregar?" onChangeText={ (text) => this.fetchAPI(text)} style={estiloVista.labelForm}/>
                <Text style={estiloVista.tituloForm}>Buscar/Filtrar Tarjetas</Text>
                <TextInput placeholder="Nombre" onChangeText={ (text) => this.filtrarNombre(text)} style={estiloVista.labelForm}></TextInput>
                <TextInput placeholder="Apellido" onChangeText={ (text) => this.filtrarApellido(text)} style={estiloVista.labelForm}></TextInput>
                <TextInput placeholder="País" onChangeText={ (text) => this.filtrarPais(text)} style={estiloVista.labelForm}></TextInput>
                <TextInput placeholder="Ciudad" onChangeText={ (text) => this.filtrarCiudad(text)} style={estiloVista.labelForm}></TextInput>
            </View>
           
            <TouchableOpacity onPress={ () => this.clearAsyncStorage()}>
                        <View style={estiloVista.reset}>
                        <Text >
                            Reset
                        </Text>
                        </View>           
            </TouchableOpacity>
        
        
        <View style={estiloVista.tarjetasContainer}>
            <SafeAreaView style={estiloVista.container}>
                <ScrollView>
                    <Text style={estiloVista.titulosSecciones}>Inicio</Text>
                    <FlatList data ={this.state.items} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor} horizontal    showsHorizontalScrollIndicator={false}  legacyImplementation={false}></FlatList>

                    <Text style={estiloVista.titulosSecciones}>Tarjetas Importadas</Text>
                    <FlatList data={this.state.importados} renderItem={this.renderItem} keyExtractor={this.keyExtractor} horizontal    showsHorizontalScrollIndicator={false}  legacyImplementation={false}></FlatList>

                    <Text style={estiloVista.titulosSecciones}>Tarjetas restauradas</Text>
                    <FlatList data={this.state.restaurados} renderItem={this.renderItem} keyExtractor={this.keyExtractor} horizontal    showsHorizontalScrollIndicator={false}  legacyImplementation={false}></FlatList>
                </ScrollView>
            </SafeAreaView>
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