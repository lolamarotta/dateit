import React, {Component} from 'react';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
} from 'react-native';
//Estilos
import {estiloFavs, estiloVista} from '../styles/styles';

function About ({navigation}){
        return(
            <View>
                <View>
                    <Text style={estiloFavs.titulo}>
                        Sobre Nosotros
                    </Text>
                </View>

                <View style={estiloAbout.mainContainer}>
                    <Text style={estiloAbout.h1}>¡Bienvenido a Sobre Nostros!</Text>
                    <Text style={estiloAbout.p}>Mora Raimondi es una #programadora que escribe para Pinnacle Mag y trabaja como copywriter en ProgramOn!!!</Text>
                    <Text style={estiloAbout.p}>Tomas Giampaoletti es un #programador que tiene su propia agencia CreativityCo</Text>
                    <Text style={estiloAbout.p}>Lola Marotta es una #programadora que necesita guita y no tiene tiempo a trabajar posta y por eso da clases particulares</Text>
                </View>
            </View>
        )
    }

export default About;

const estiloAbout = StyleSheet.create({
    mainContainer: {
        marginLeft: '10%',
        paddingRight: 30,
        height: "100%",
    },

    h1: {
        fontSize: 30,
        marginBottom: 20,
    },

    p: {
        fontSize: 20,
        marginBottom: 18,
    }
  });