import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Tarjetas from '../components/Tarjetas'
import {getData} from '../api/RandomUser'

class ImportCards extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


keyExtractor = (item,idx) => idx.toString();
renderItem= ({item}) => {
    return(
        <Tarjetas item={item} />
    )
}
componentDidMount() {
    getData()
     .then(results =>{
         console.log(results);
         this.setState({items:results})
     })
   }



render(){
    return (
    <View>
        <FlatList data={this.state.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}> </FlatList>
    </View>
    )

    }
}

export default ImportCards;