import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Modal, Button, } from 'react-native';
import {getData} from "../api/RandomUser"

class Tarjetas extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
        showModal: false,
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
            {/* <TouchableOpacity onPress={() => Alert.alert("Mas detalles: " + item.name.first)}> */}
              
              <TouchableOpacity onPress={()=> this.setState({showModal: !this.state.showModal})}>
              
              <Modal visible={this.state.showModal} animationType="slide" transparent={false}>
                
                <View style={estiloModal.contenedor}>
                  
                  <Text  style={estiloModal.titulo}>Más informacion sobre {item.name.first} {item.name.last}</Text>

                  <View>
                    <Text style={estiloModal.informacion}>Direccion: {item.location.street.name} {item.location.street.number}</Text>
                    <Text style={estiloModal.informacion}>{item.location.city} {item.location.state}</Text>
                    <Text style={estiloModal.informacion}>{item.location.country}</Text>
                    <Text style={estiloModal.informacion}>Codigo postal: {item.location.postcode}</Text>
                    <Text style={estiloModal.informacion}>Se registro el: {item.registered.date}</Text>
                    <Text style={estiloModal.informacion}>Telefono: {item.phone}</Text>
                  </View>

                  <Text onPress={()=> this.setState({showModal: !this.state.showModal})}  style={estiloModal.cierre}>Cerrar</Text>
                
                </View>
              
              </Modal>

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

    tarjetasContainer: {
      backgroundColor: "#FFF9F8",
      marginBottom: 24,
      paddingTop: 16,
      paddingBottom: 24,
      paddingLeft:16,
      paddingRight: 16,
      borderRadius: 14,
      width: 800,
      
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
        padding: 0
    },
    image: {
      width: 280,
      height: 280,
      borderRadius: 20,
    },
  });

const estiloModal = StyleSheet.create({
  modal: {
    backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
  },
  
  contenedor: {
    width: "85%",
    height: "40%",
    backgroundColor: "#FDD0DC",
    alignSelf: "center",
    marginTop: "60%",
    borderRadius: 14,
  },

  informacion: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
  },

  cierre: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    textAlign: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 60,
    textAlign: "center",
  }
})

export default Tarjetas;