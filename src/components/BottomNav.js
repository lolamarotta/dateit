import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, Alert, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import ImportCards from '../screens/ImportCards';
import Papelera from '../screens/Papelera';
import About from '../screens/About';
import Favoritos from '../screens/Favoritos';

const Tab = createBottomTabNavigator()

class BottomNav extends Component {

    render(){
        return(
                <Tab.Navigator tabBarOptions={{
                activeTintColor: "#FD4C65",
                style: {
                    position: "absolute",
                    bottom: 100,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: "#FFF9F8",
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 32,
                    paddingRight: 32,
                    marginLeft: 16,
                    marginRight: 16,
                }
                }}>
                    <Tab.Screen name="Home" component={ImportCards} options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image
                                    source={require('../assets/icons/home.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#FD4C65' : '#424242'
                                    }}
                                />
                                <Text style={{color: focused ? '#FD4C65' : '#424242'}}></Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Papelera" component={Papelera} options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image
                                    source={require('../assets/icons/papelera.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#FD4C65' : '#424242'
                                    }}
                                />
                                <Text style={{color: focused ? '#FD4C65' : '#424242'}}></Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="Favoritos" component={Favoritos} options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image
                                    source={require('../assets/icons/favoritos.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#FD4C65' : '#424242'
                                    }}
                                />
                                <Text style={{color: focused ? '#FD4C65' : '#424242'}}></Text>
                            </View>
                        )
                    }}/>
                    <Tab.Screen name="About" component={About} options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image
                                    source={require('../assets/icons/info.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#FD4C65' : '#424242'
                                    }}
                                />
                                <Text style={{color: focused ? '#FD4C65' : '#424242'}}></Text>
                            </View>
                        )
                    }}/>
                </Tab.Navigator>            
        )
    }
}

const estiloNav = StyleSheet.create({
    navContainer: {
        height: 100,
        backgroundColor: "red",

    },
    shadow :{
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 10},
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
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

export default BottomNav;
