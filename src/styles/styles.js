import {StyleSheet} from 'react-native';

const estiloVista = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        height: "100%",
        alignItems: "center",

    },  
    tarjetasContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
    },
    lineaboton: {
        width: 50,
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: 10,
        bottom: 600,
    },

    
  })

export {estiloVista, }