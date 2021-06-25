import {StyleSheet} from 'react-native';

const estiloVista = StyleSheet.create({
    viewContainer: {
      marginBottom: 200,
    },  
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
    },
    mainContainer: {
        backgroundColor: "#F5F5F8",
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: "center",
        marginBottom: 200,
        height:'100%'

    },  
    tarjetasContainer: {
        display: "flex",
        flexDirection: "column",
        height:"100%"
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

    titulosSecciones: {
      fontSize: 30,
      paddingBottom: 5,
      marginLeft: 5,
      fontWeight: 'bold',
      color: '#424242',
    },

    tituloForm: {
      fontSize: 24,
      color: '#424242',
      margin: 5,
      fontWeight: 'bold',
    },

    labelForm: {
      fontSize: 20,
      margin: 5,
    },

    reset: {
      backgroundColor: '#FD4C65',
      fontSize: 20,
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
    },

    contenedorFrom: {
      marginTop: '5%',
      backgroundColor: '#FEDEE6',
      borderRadius: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 100,
      width: '100%'
    },

    contenedorTitulo: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      backgroundColor: '#FFF9F8',
    },

    titulo:{
      fontSize: 30,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#424242',
    }

    
  })

const estiloTarjetas = StyleSheet.create({

    tarjetasContainer: {
      backgroundColor: "#FFF9F8",
      marginBottom: 24,
      paddingTop: 16,
      paddingBottom: 24,
      paddingLeft:16,
      paddingRight: 16,
      borderRadius: 14,
      width: "100%",

      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 5,
      // },
      // shadowOpacity: 0.34,
      // shadowRadius: 6.27,

      // elevation: 10,
      
    },
    elimino: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
    titulos: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 24,
        // fontFamily: "Poppins"
    },
    info: {
      fontSize: 16,
      marginTop: 5,
      // fontFamily: "Poppins",
    },
    tarjeta: {
        color: '#424242',
        padding: 0,
        marginRight: 20,
    },
    image: {
      width: 280,
      height: 280,
      borderRadius: 20,
    },
  });

const estiloModal = StyleSheet.create({
  imagenModal: {
    width:80,
    height:80,
    borderRadius: 100,
  },
  contenedorSuperior:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  modal: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  //   fontFamily: "Poppins"
  },
  
  contenedor: {
    width: "85%",
    height: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 14,

    marginBottom: "25%",
    marginTop:"25%",
  },

  informacion: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "left",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  nombre:{
    fontSize: 24,
  },
  contenedorInferior: {
    padding: 16,
  },
  contenedorBotones:{
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    marginTop: 70
  },  
  botonCierre: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",

    width: 140,
    height: 46,
    borderRadius: 16,
    alignItems: "center"
  },
  botonEditar: {
    fontSize: 16,
    textAlign: "center",
    color: "white",

    backgroundColor: "#669EBD",

    width: 140,
    height: 46,
    borderRadius: 16,
    alignItems: "center"
  },
})

const estiloFavs = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    color: '#75C8CC',
    marginTop: '20%',
    marginLeft: '10%',
    marginBottom: 20,
    fontSize: 40,
  }
})

export {estiloVista, estiloTarjetas, estiloModal, estiloFavs}