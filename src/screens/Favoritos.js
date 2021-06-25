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
import { getDataFavoritos } from '../../asyncStorage';
import TarjetasFavoritas from '../components/TarjetasFavoritas';
//Estilos
import {estiloFavs, estiloVista} from '../styles/styles';
import HeaderPapelera from '../components/HeaderPapelera';

class Favoritos extends Component {

    constructor(){
        super();
        this.state = {
            items: [],
            importados: [],
            numero: "",
            itemsFavoritos: [],
        }
    }
    
    componentDidMount() {
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.fetchFavoritos();
        })
   }

   componentWillUnmount(){
    this.unsubscribe();
    }

   fetchFavoritos(){
        getDataFavoritos("@Favoritos")
        .then(results =>{
            console.log(results);
            this.setState({itemsFavoritos:results})
        })
   }

   renderItem= ({item}) => {
    return(
        <TarjetasFavoritas item={item}/>
    )
    }

    keyExtractor = (itemsFavoritos,idx) => itemsFavoritos.login.uuid.toString();

    render(){
        return(
            <SafeAreaView style={estiloVista.viewContainer}>
                <HeaderPapelera/>
                <View style={estiloVista.tarjetasContainer}>
                    <SafeAreaView style={estiloVista.container}>
                        <Text style={estiloVista.titulosSecciones}>Tus Favoritos</Text>
                        <FlatList data ={this.state.itemsFavoritos} renderItem ={this.renderItem} keyExtractor ={this.keyExtractor}></FlatList>
                    </SafeAreaView>
                </View>
            </SafeAreaView>
        )
    }
}


export default Favoritos;