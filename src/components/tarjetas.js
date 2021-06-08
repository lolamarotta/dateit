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
        <View key={item.login.uuid} style={testilo.tarjet}>
          <TouchableOpacity onPress={() => Alert.alert("Mas detalles:" + item.name.first)}>
            {/* importar un modal */}
              <Text style={testilo.elimino}>Eliminar tarjeta</Text>
              <Text style={testilo.tarjet}> Nombre: {item.name.first} </Text> 
              <Text> Apellido: {item.name.last} </Text>
              <Text> Email: {item.email} </Text>
              <Text> Fecha de nacimiento: {item.dob.date.substring(0,10)} ({item.dob.age}) </Text>
              <Image style={testilo.image} source={{uri: item.picture.thumbnail}}/>
          </TouchableOpacity>
        </View>
    )
  }
}

const testilo = StyleSheet.create({
    container: {
      flex: 1,
      height: 9,
      width: 350,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
    },
    elimino: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
    titulos: {
        fontSize: 20,
        fontWeight: "bold",
    },
    tarjet: {
        color: 'brown',
    },
    image: {
      width: 30,
      height: 30,
    },
  });

export default Tarjetas;