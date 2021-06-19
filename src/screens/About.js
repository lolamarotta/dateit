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