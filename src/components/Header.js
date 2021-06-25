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
                    <TouchableOpacity onPress= {this.props.abrirAgregar.bind(this)}>
                        <Image
                        source={require('../assets/icons/agregarTarjetas.png')}
                        resizeMode='contain'
                        style={{
                                width: 25,
                                height: 25,
                                }}
                                />
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/images/logoDateIt.png')}
                        resizeMode='contain'
                        style={{
                                width: 100,
                                }}
                                />
                    <TouchableOpacity onPress= {this.props.abrirBuscar.bind(this)}>
                        <Image
                            source={require('../assets/icons/search.png')}
                            resizeMode='contain'
                            style={{
                                    width: 25,
                                    height: 25,
                                    }}
                                    />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const estiloHeader = StyleSheet.create({
    header: {
        backgroundColor:"#FFF9F8",
        height:60,
    },
    container: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",

      alignContent: "center",
      alignItems: "center",

      paddingRight: 16,
      paddingLeft: 16,
      height: 60,
      
      width:"100%"
    }})

export default Header;