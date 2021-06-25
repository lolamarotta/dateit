import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity, Modal, Button, } from 'react-native';

// Estilos
import {estiloModal, estiloVista} from "../styles/styles"

class ModalAgregar extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false,
        }
    }

    agregarTarjetas(text){
        var numero = text
        this.props.data(numero)
    }

    render(){
        return(
            <Modal visible={this.props.mostrar} animationType="fade" transparent={true} style={estiloModal.modal}>
                        <View style={estiloVista.contenedorFrom}>
                            <Text style={estiloVista.tituloForm}>Agregar Tarjetas</Text>
                            <TextInput keyboardType="numeric" placeholder= "Cuantas tarjetas querés agregar?" onChangeText={ text => this.agregarTarjetas(text)} style={estiloVista.labelForm}/>

                            <TouchableOpacity onPress={this.props.cerrar.bind(this)}>
                                <Text>Cerrar</Text>
                            </TouchableOpacity>

                        </View>
            </Modal>
        )
    }
}

export default ModalAgregar;