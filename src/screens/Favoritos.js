import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
} from 'react-native';

class Favoritos extends Component {
    render(){
        return(
            <View>
                <View style={estiloFavoritos.mainContainer}>
                    <Text>¡Bienvenido a Favoritos!</Text>
                </View>
            </View>
        )
    }
}

const estiloFavoritos = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
  });

export default Favoritos;