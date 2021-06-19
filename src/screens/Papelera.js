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

class Papelera extends Component {
    render(){
        return(
            <View>
                <View style={estiloPapelera.mainContainer}>
                    <Text>¡Bienvenido a Papelera!</Text>
                </View>
            </View>
        )
    }
}

const estiloPapelera = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
  });

export default Papelera;