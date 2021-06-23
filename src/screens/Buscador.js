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


class Buscador extends Component {

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

                    <View>
                        <Text> 
                            Buscar Tarjetas
                        </Text>
                         
                        <Text>Nombre</Text>
                        <TextInput></TextInput>
                        <Text>Apellido</Text>
                        <TextInput></TextInput>
                        <Text>País</Text>
                        <TextInput></TextInput>
                        <Text>Ciudad</Text>
                        <TextInput></TextInput>
                    </View>





                </View>


                // <View>
                //     <View style={estiloFavoritos.tarjetasContainer}>
                //         <FlatList data={this.state.itemsFavoritos} renderItem={this.renderItem} keyExtractor={this.keyExtractor}></FlatList>
                //     </View>
                // </View>
            )
        }

};


export default Buscador;