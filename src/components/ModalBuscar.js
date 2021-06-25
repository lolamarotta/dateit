import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Modal, Button, } from 'react-native';

// Estilos
import {estiloModal, estiloVista} from "../styles/styles"

class ModalBuscar extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false,
        }
    }

    filtrarNombre(text){
        var nombre = text
        this.props.nombre(nombre)
    }

    filtrarApellido(text){
        var apellido = text
        this.props.apellido(apellido)
    }

    filtrarPais(text){
        var pais = text
        this.props.pais(pais)
    }

    filtrarCiudad(text){
        var ciudad = text
        this.props.ciudad(ciudad)
    }

    render(){
        return(
            <Modal visible={this.props.mostrar} animationType="fade" transparent={true} style={estiloModal.modal}>
                <View style={estiloVista.contenedorFrom}>
                    <Text style={estiloVista.tituloForm}>Buscar/Filtrar Tarjetas</Text>
                    <TextInput placeholder="Nombre" onChangeText={ (text) => this.filtrarNombre(text)} style={estiloVista.labelForm}></TextInput>
                    <TextInput placeholder="Apellido" onChangeText={ (text) => this.filtrarApellido(text)} style={estiloVista.labelForm}></TextInput>
                    <TextInput placeholder="País" onChangeText={ (text) => this.filtrarPais(text)} style={estiloVista.labelForm}></TextInput>
                    <TextInput placeholder="Ciudad" onChangeText={ (text) => this.filtrarCiudad(text)} style={estiloVista.labelForm}></TextInput>
                    <TouchableOpacity onPress={this.props.cerrar.bind(this)}>
                        <Text>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

}

export default ModalBuscar