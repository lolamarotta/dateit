import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';
import Tarjetas from '../components/Tarjetas';
import ImportCards from './ImportCards';
import {getData} from '../api/RandomUser';


class Menu extends Component {

    render(){

        return(
            <View>

            <Text>Importar tarjetas</Text>
            <Text>Ver tarjetas importadas</Text>
            <Text>Eliminar tarjetas</Text>
            <Text>Buscar tarjetas</Text>
            <Text>Modificar tarjetas</Text>
            <Text>Papelera</Text>
            <Text>Acerca de DateIt</Text>

            </View>
        )

    }

}

export default Menu; 