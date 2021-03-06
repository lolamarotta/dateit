import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Modal, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from "../api/RandomUser"

// Estilos
import {estiloTarjetas, estiloModal, estiloFavs} from "../styles/styles"

class TarjetasFavoritas extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
        showModal: false,
        comentarios:[],
        tarjetasGuardadas:[]
      } 
    }
    

    async guardarComentarios(value){
      try{
        await AsyncStorage.setItem('@comentario', value);
      } catch (error){
        console.log(error)
      }
    }

    async mostrarComentario(){
      try{
        const nuevoComentario = await AsyncStorage.getItem('@comentario')
        if(value !== null){
          this.setState({comentario: nuevoComentario})
        } else {
          console.log('No existe un comentario')
        }
      }catch(error){
        console.log(error)
      }
    }

    // async guardarTarjetas(){
    //   try{
    //     const jsonUsers = JSON.stringify(this.state.tarjetasGuardadas)
    //     await AsyncStorage.setItem('@tarjetasGuardadas', jsonUsers)
    //     console.log("Datos guardados")

    //     Alert.alert("Datos guardados")
    //   } catch(error){
    //     console.log(error)
    //   }
    // }
  
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

const { comentarios } = this.state
return (
        <View key={item.login.uuid} style={estiloTarjetas.tarjeta}>
          
          <View style={estiloTarjetas.tarjetasContainer}>
            {/* <TouchableOpacity onPress={() => Alert.alert("Mas detalles: " + item.name.first)}> */}
              
              <TouchableOpacity onPress={()=> this.setState({showModal: true})}>
              
                <Modal visible={this.state.showModal} animationType="fade" transparent={false} style={estiloModal.modal}>
                  
                  <View style={estiloModal.contenedor}>

                    <View style={estiloModal.contenedorSuperior}>
                      <View style={estiloModal.imagenContainer}>
                        <Image style={estiloModal.imagenModal} source={{uri: item.picture.large}}/>
                      </View>

                      <View style={estiloModal.tituloContainer}>
                        <Text  style={estiloModal.titulo}>Informaci??n{"\n"}adicional sobre</Text>
                        <Text  style={estiloModal.nombre}>{item.name.first} {item.name.last}</Text>
                      </View>
                    </View>

                    {/* Informaci??n adicional sobre el contacto */}
                    <View style={estiloModal.contenedorInferior}> 
                      <Text style={estiloModal.informacion}>Direccion: {item.location.street.name} {item.location.street.number}</Text>
                      <Text style={estiloModal.informacion}>Ciudad: {item.location.city} ({item.location.state})</Text>
                      <Text style={estiloModal.informacion}>Pa??s: {item.location.country}</Text>
                      <Text style={estiloModal.informacion}>Codigo postal: {item.location.postcode}</Text>
                      <Text style={estiloModal.informacion}>Se registro el: {item.registered.date}</Text>
                      <Text style={estiloModal.informacion}>Telefono: {item.phone}</Text>
                      <Text style={estiloModal.informacion}>Comentarios: {this.state.comentarios}</Text>

                      <TextInput onChangeText={text => this.guardarComentarios.bind(text)}></TextInput>
                    </View>

                    {/* Bot??n para cerrar */}
                    <View style={estiloModal.contenedorBotones}>
                      <Text onPress={()=> this.setState({showModal: !this.state.showModal})}  style={estiloModal.botonCierre}>Cerrar</Text>
                      <Text style={estiloModal.botonEditar}>Editar{"\n"}informaci??n</Text>
                    </View>

                  </View>
                
                </Modal>

                {/* <Text style={estiloTarjetas.elimino}>Eliminar tarjeta</Text> */}
                <Image style={estiloTarjetas.image} source={{uri: item.picture.large}}/>
                <Text style={estiloTarjetas.titulos}> {item.name.first} {item.name.last}</Text> 
                <Text style={estiloTarjetas.info}>{item.dob.age} a??os, {item.dob.date.substring(0,10)}</Text> 
                <Text style={estiloTarjetas.info}>{item.email} </Text>

                {/* <View>
                  <TouchableOpacity onPress={this.props.onFav.bind(this.id)}>
                    <Text>Guardar</Text>
                  </TouchableOpacity>
                </View> */}
                {/* <TouchableOpacity onPress={this.props.Borrar.bind(this,item.login.uuid)}>
                    <Text>Al tacho</Text>
                  </TouchableOpacity> */}

            </TouchableOpacity>
          </View>
        
        </View>
    )
  }
}

export default TarjetasFavoritas;