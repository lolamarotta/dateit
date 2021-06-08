import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {getData} from "../api/RandomUser"

class Tarjetas extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
      } 
    }
  
  
    componentDidMount() {
            async () => {
              let data = await getData()
            this.setState({
              isLoaded: true,
              items: data.results
            });
          }                 
    }

render(){
const { error, isLoaded } = this.state;
const {item} = this.props
return (
        <View key={item.login.uuid} style={estiloTarjetas.tarjeta}>
          <View style={estiloTarjetas.tarjetasContainer}>
            <TouchableOpacity onPress={() => Alert.alert("Mas detalles:" + item.name.first)}>
              {/* importar un modal */}
                {/* <Text style={estiloTarjetas.elimino}>Eliminar tarjeta</Text> */}
                <Image style={estiloTarjetas.image} source={{uri: item.picture.large}}/>
                <Text style={estiloTarjetas.titulos}> {item.name.first} {item.name.last}</Text> 
                <Text style={estiloTarjetas.info}>{item.dob.age} años, {item.dob.date.substring(0,10)}</Text> 
                <Text style={estiloTarjetas.info}>{item.email} </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

const estiloTarjetas = StyleSheet.create({
    container: {
      flex: 1,
      height: 9,
      width: 350,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
    },
    tarjetasContainer: {
      backgroundColor: "#FFF9F8",
      marginBottom: 24,
      padding: 16,
      borderRadius: 14,
    },
    elimino: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
    titulos: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 24,
    },
    info: {
      fontSize: 16,
      marginTop: 5,
    },
    tarjeta: {
        color: '#424242',
    },
    image: {
      width: 280,
      height: 280,
      borderRadius: 20,
    },
  });

export default Tarjetas;