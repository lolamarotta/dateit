import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'


class BottomNav extends Component {
    constructor(){
        super();
    this.state = {
        error: null,
        isLoaded: false,
        numero: "",
        items: [],
      } 
    }

    render(){
        return(
            <View style={estiloNav.navContainer}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.screen name="Screen 1" component=(Screen_1)/>
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        )
    }

}

const estiloNav = StyleSheet.create({
    navContainer: {
            // position:
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      paddingRight: 16,
      paddingLeft: 16,
      height: 100,
      backgroundColor: "red"
    }})

export default Header;