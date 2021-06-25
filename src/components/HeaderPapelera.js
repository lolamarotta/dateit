import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

class HeaderPapelera extends Component {
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
                    <Image
                        source={require('../assets/images/logoDateIt.png')}
                        resizeMode='contain'
                        style={{
                                width: 100,
                                }}
                                />
                </View>
            </View>
        )
    }

}

const estiloHeader = StyleSheet.create({
    header: {
        backgroundColor:"#FFF9F8",
        height:80,
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

export default HeaderPapelera;