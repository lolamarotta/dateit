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
    Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Componentes
import Tarjetas from '../components/Tarjetas';
import {getData} from '../api/RandomUser';
import { getDataFavoritos, storeDataFavoritos, getDataBorrados, storeDataBorrados, getDataRestaurados, getDataApi } from '../../asyncStorage';
import ModalAgregar from '../components/ModalAgregar';
import ModalBuscar from '../components/ModalBuscar';

//Estilos
import {estiloVista, estiloModal} from '../styles/styles';
import { Easing } from 'react-native-reanimated';
import Header from '../components/Header';


class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            originales: [],
            importados: [],
            numero: "",
            itemsFavoritos: [],
            itemsBorrados: [],
            items: [],
            restaurados: [],
            toValue: 200,
            modalAgregar: false,
            modalBuscar: false,
            resultados: []

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
            items: this.state.originales
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
            items: this.state.originales
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
            items: this.state.originales
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
            items: this.state.originales
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
        getDataRestaurados('@Restaurados')
        .then(resultadoRestaurado => {
            this.setState({itemsBorrados: resultadoRestaurado})
        })

        getDataFavoritos('@Favoritos')
        .then(resultadoFavoritos => {
            this.setState({itemsFavoritos: resultadoFavoritos})
        })

        getDataApi('@Api')
        .then(resultadoApi => {
            this.setState({items: resultadoApi})
        })
    })
    
    getData(1)
        .then(resultsApi =>{
            console.log(resultsApi);
            this.setState({items: resultsApi, originales: resultsApi})
        })

    }

componentWillUnmount(){
     this.unsubscribe();
}

// Datos de Importados -> importados
fetchAPI(numero){
    console.log(numero)

    getData(numero)
    .then(resultsImportados =>{
        console.log(resultsImportados);
        this.setState({items: [...this.state.items, ...resultsImportados], originales: [...resultsImportados]})
    })
}

// Datos de Restaurados -> restaurados
fetchRestaurados(){
    getDataRestaurados('@Restaurados')
     .then(resultsRestaurados => {
         this.setState({restaurados: resultsRestaurados})
         this.setState({items: [...this.state.restaurados]})
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

/* MODAL AGREGAR Y BUSCAR */

modalAgregarAbrir =  () => this.setState({modalAgregar: true});
modalAgregarCerrar = () => this.setState({modalAgregar:false});

modalBuscarAbrir =  () => this.setState({modalBuscar: true});
modalBuscarCerrar = () => this.setState({modalBuscar:false});


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
        <SafeAreaView style={estiloVista.viewContainer}>
            <Header abrirAgregar={this.modalAgregarAbrir.bind(this)} abrirBuscar={this.modalBuscarAbrir.bind(this)}/>

                {/* <Animated.View style={{
                        top: this.position,
                        width: 300,
                        height:70,
                        textAlign: 'center',}}> */}
                    
                {/* </Animated.View> */}
                <ModalAgregar mostrar={this.state.modalAgregar} cerrar={this.modalAgregarCerrar.bind(this)} data={this.fetchAPI.bind(this)}/>

                <ModalBuscar mostrar={this.state.modalBuscar} cerrar={this.modalBuscarCerrar.bind(this)} nombre={this.filtrarNombre.bind(this)} apellido={this.filtrarApellido.bind(this)} pais={this.filtrarPais.bind(this)} ciudad={this.filtrarCiudad.bind(this)}/>

                {/* <Modal visible={this.state.modalAgregar} animationType="fade" transparent={true} style={estiloModal.modal}>
                    <View style={estiloVista.contenedorFrom}>
                        <Text style={estiloVista.tituloForm}>Buscar/Filtrar Tarjetas</Text>
                        <TextInput placeholder="Nombre" onChangeText={ (text) => this.filtrarNombre(text)} style={estiloVista.labelForm}></TextInput>
                        <TextInput placeholder="Apellido" onChangeText={ (text) => this.filtrarApellido(text)} style={estiloVista.labelForm}></TextInput>
                        <TextInput placeholder="País" onChangeText={ (text) => this.filtrarPais(text)} style={estiloVista.labelForm}></TextInput>
                        <TextInput placeholder="Ciudad" onChangeText={ (text) => this.filtrarCiudad(text)} style={estiloVista.labelForm}></TextInput>
                    </View>

                </Modal> */}
                
                {/* <TouchableOpacity onPress={ () => this.clearAsyncStorage()}>
                            <View style={estiloVista.reset}>
                            <Text >
                                Reset
                            </Text>
                            </View>           
                </TouchableOpacity> */}
            
            
            <View style={estiloVista.tarjetasContainer}>
                <SafeAreaView style={estiloVista.container}>
                    <Text style={estiloVista.titulosSecciones}>Inicio</Text>
                    <FlatList data ={this.state.items} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
                </SafeAreaView>
            </View>

        </SafeAreaView>
    )}
    

};



export default ImportCards;