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

function About ({navigation}){
        return(
            <View>
                <View style={estiloAbout.mainContainer}>
                    <Text>¡Bienvenido a Sobre Nostros!</Text>
                    <Text>Mora Raimondi es una #programadora que escribe para Pinnacle Mag y trabaja como copywriter en ProgramOn!!!</Text>
                    <Text>Tomas Giampaoletti es un #programador que tiene su propia agencia CreativityCo</Text>
                    <Text>Lola Marotta es una #programadora que necesita guita y no tiene tiempo a trabajar posta y por eso da clases particulares</Text>
                </View>
            </View>
        )
    }

export default About;

const estiloAbout = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
  });