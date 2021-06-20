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
        comentarios: "Acá van los comentarios"
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
              
                <Modal visible={this.state.showModal} animationType="fade" transparent={false} style={estiloModal.modal}>
                  
                  <View style={estiloModal.contenedor}>

                    <View style={estiloModal.contenedorSuperior}>
                      <View style={estiloModal.imagenContainer}>
                        <Image style={estiloModal.imagenModal} source={{uri: item.picture.large}}/>
                      </View>

                      <View style={estiloModal.tituloContainer}>
                        <Text  style={estiloModal.titulo}>Información <br/>adicional sobre</Text>
                        <Text  style={estiloModal.nombre}>{item.name.first} {item.name.last}</Text>
                      </View>
                    </View>

                    {/* Información adicional sobre el contacto */}
                    <View style={estiloModal.contenedorInferior}> 
                      <Text style={estiloModal.informacion}>Direccion: {item.location.street.name} {item.location.street.number}</Text>
                      <Text style={estiloModal.informacion}>Ciudad: {item.location.city} ({item.location.state})</Text>
                      <Text style={estiloModal.informacion}>País: {item.location.country}</Text>
                      <Text style={estiloModal.informacion}>Codigo postal: {item.location.postcode}</Text>
                      <Text style={estiloModal.informacion}>Se registro el: {item.registered.date}</Text>
                      <Text style={estiloModal.informacion}>Telefono: {item.phone}</Text>
                      <Text style={estiloModal.informacion}>Comentarios: {this.state.comentarios}</Text>
                    </View>

                    {/* Botón para cerrar */}
                    <View style={estiloModal.contenedorBotones}>
                      <Text onPress={()=> this.setState({showModal: !this.state.showModal})}  style={estiloModal.botonCierre}>Cerrar</Text>
                      <Text style={estiloModal.botonEditar}>Editar<br/>información</Text>
                    </View>
                  
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
        fontWeight: "600",
        marginTop: 24,
        fontFamily: "Poppins"
    },
    info: {
      fontSize: 16,
      marginTop: 5,
      fontFamily: "Poppins",
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
  imagenModal: {
    width:80,
    height:80,
    borderRadius: 100,
  },
  contenedorSuperior:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  modal: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    fontFamily: "Poppins"
  },
  
  contenedor: {
    width: "85%",
    height: "80%",
    backgroundColor: "(255, 249, 248, 1)",
    alignSelf: "center",
    borderRadius: 14,

    marginBottom: "25%",
    marginTop:"25%",
  },

  informacion: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "left",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  nombre:{
    fontSize: 24,
  },
  contenedorInferior: {
    padding: 16,
  },
  contenedorBotones:{
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    marginTop: 70
  },  
  botonCierre: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",

    width: 140,
    height: 46,
    borderRadius: 16,
    alignItems: "center"
  },
  botonEditar: {
    fontSize: 16,
    textAlign: "center",
    color: "white",

    backgroundColor: "#669EBD",

    width: 140,
    height: 46,
    borderRadius: 16,
    alignItems: "center"
  },
})

export default Tarjetas;