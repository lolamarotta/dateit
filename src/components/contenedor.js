import React, {Component} from 'react'; 
import {getData} from '../api/RandomUsers';

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
}

export default Contenedor;