import React, {Component} from 'react'; 
import {getData} from '../api/RandomUsers';
import Tarjetas from '../Tarjetas';

export class Contenedor extends Component {

    componentDidMount(){
        async () => {
            let data = await getData();
            this.setState({
                isLoaded: true,
                items: data.results
            });
        }
    }

    render(){
        return(
            <View>
                
                <Tarjetas/>

            </View>
        )
    }
}

export default Contenedor;