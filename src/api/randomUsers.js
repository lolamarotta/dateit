import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react'; 

export async function getData (){
    try{
        const result = await fetch('https://randomuser.me/api?results=10');
        const json = await result.json();
        console.log(json);
        return json.results;
    }catch(e){
        console.log(e)
    }
}


