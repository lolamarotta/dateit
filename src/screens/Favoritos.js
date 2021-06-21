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
import { getDataFavoritos } from '../../asyncStorage';
import TarjetasFavoritas from '../components/TarjetasFavoritas';

class Favoritos extends Component {

    constructor(){
        super();
        this.state = {
            items: [],
            importados: [],
            numero: "",
            itemsFavoritos: [],
        }
    }
    
    componentDidMount() {
    getDataFavoritos("@Favoritos")
     .then(results =>{
         console.log(results);
         this.setState({itemsFavoritos:results})
     })
   }

   renderItem= ({item}) => {
    return(
        <TarjetasFavoritas item={item}/>
    )
    }

    render(){
        return(
            <View>
                <View style={estiloFavoritos.tarjetasContainer}>
                    <FlatList data={this.state.itemsFavoritos} renderItem={this.renderItem} keyExtractor={this.keyExtractor}></FlatList>
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