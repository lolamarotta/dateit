import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

class Header extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
      } 
    }

    render(){
        return(
            <View style={estiloHeader.header}>
                <View style={estiloHeader.container}>
                    <Text>Agregar tarjetas</Text>
                    <Text>Logo</Text>
                    <Text>Filtrar</Text>
                </View>
            </View>
        )
    }

}

const estiloHeader = StyleSheet.create({
    header: {
            // position:
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignContent: "center",

      height: 60,
    }})

export default Header;