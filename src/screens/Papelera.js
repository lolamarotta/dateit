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
    SafeAreaView
} from 'react-native';
import { getDataBorrados, storeDataRestaurados, getDataRestaurados } from '../../asyncStorage';
import TarjetasBorradas from '../components/TarjetasBorradas';
//Estilos
import {estiloFavs, estiloVista} from '../styles/styles';
import HeaderPapelera from '../components/HeaderPapelera';

class Papelera extends Component {
    constructor(){
        super();
        this.state = {
            numero: "",
            itemsBorrados: [],
            items: [],
            itemsRestaurados: [],
        }
    }
    
    fetchBorrados(){
        getDataBorrados("@Borrar")
     .then(results =>{
         console.log(results);
         this.setState({itemsBorrados:results})
     })
    }

    componentDidMount() {

     this.unsubscribe = this.props.navigation.addListener('focus', () => {
        this.fetchBorrados();
    })
    
   }

   componentWillUnmount(){
    this.unsubscribe();
    }

   keyExtractor = (itemsBorrados,idx) => itemsBorrados.login.uuid.toString();

   eliminarTarjetas (idPersona){
        console.log(idPersona)
         let resultados = this.state.itemsBorrados.filter((itemsBorrados) => {
        return (idPersona !== itemsBorrados.login.uuid)
        })

        this.setState({itemsBorrados: resultados})

        alert('Se eliminó tu tarjeta')
    }

    tarjetasRestauradas (idPersona){
        console.log(idPersona)
        let resultados = this.state.itemsBorrados.filter((itemsBorrados) => {
          return (idPersona !== itemsBorrados.login.uuid)
        })
  
        let Restaurados = this.state.itemsBorrados.filter((itemsBorrados) => {
          return (idPersona == itemsBorrados.login.uuid)
        })
  
        let arrayRestaurados = [... this.state.itemsBorrados, ... Restaurados]

        this.setState({itemsBorrados: resultados, itemsRestaurados: arrayRestaurados})
  
        alert('Se recupero la tarjeta')
  
        storeDataRestaurados(arrayRestaurados, '@Restaurados')
      }



//    eliminarTarjetas(idItem){
//        console.log(idItems)
//     let borrados = this.state.itemsBorrados.filter((itemsBorrados)=>{
//       return (idItem !== itemsBorrados.login.uuid)
//     })
//     this.setState({itemsBorrados: borrados})
//   }

   renderItem= ({item}) => {
    return(
        <TarjetasBorradas item={item} eliminarTarjetas={this.eliminarTarjetas.bind(this)} restaurarTarjetas={this.tarjetasRestauradas.bind(this)}/>
        
    )
    }

    render(){
        return(
            <SafeAreaView style={estiloVista.viewContainer}>
                <HeaderPapelera/>
                <View style={estiloVista.tarjetasContainer}>
                    <SafeAreaView style={estiloVista.container}>
                        <Text style={estiloVista.titulosSecciones}>Papelera</Text>
                        <FlatList data ={this.state.itemsBorrados} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
                    </SafeAreaView>
                </View>
            </SafeAreaView>
        )
    }
}

const estiloBorrados = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
  });

export default Papelera;