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
import { getDataBorrados } from '../../asyncStorage';
import TarjetasBorradas from '../components/TarjetasBorradas';

class Papelera extends Component {
    constructor(){
        super();
        this.state = {
            numero: "",
            itemsBorrados: [],
            items: [],
        }
    }
    
    componentDidMount() {
    getDataBorrados("@Borrar")
     .then(results =>{
         console.log(results);
         this.setState({itemsBorrados:results})
     })
    
   }

   eliminarTarjetas (idPersona){
        console.log(idPersona)
         let resultados = this.state.itemsBorrados.filter((itemsBorrados) => {
        return (idPersona !== itemsBorrados.login.uuid)
        })

        this.setState({itemsBorrados: resultados})

        alert('Se eliminó tu tarjeta')
    }



//    eliminarTarjetas(idItem){
//        console.log(idItems)
//     let borrados = this.state.itemsBorrados.filter((itemsBorrados)=>{
//       return (idItem !== itemsBorrados.login.uuid)
//     })
//     this.setState({itemsBorrados: borrados})
//   }

   renderItem= ({item}) => {
    return(
        <TarjetasBorradas item={item} eliminarTarjetas={this.eliminarTarjetas.bind(this)}/>
    )
    }

    render(){
        return(
            <View>
                <View style={estiloBorrados.tarjetasContainer}>
                    <FlatList data={this.state.itemsBorrados} renderItem={this.renderItem} keyExtractor={this.keyExtractor}></FlatList>
                </View>
            </View>
        )
    }
}

const estiloBorrados = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%"
    },
  });

export default Papelera;