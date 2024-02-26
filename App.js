import React, {useState } from "react"
import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from "./Connexion";
import Homepage from "./Homepage";
import YourAccount from "./YourAccount";
import Reservations from "./Reservations";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Connexion">
            <Stack.Screen name="Homepage" component={Homepage} options={{title:'Votre Application Health North'}}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="YourAccount" component={YourAccount} options={{title:'Votre compte'}}/>
            <Stack.Screen name="Reservations" component={Reservations} options={{title:'Vos rendez-vous'}}/>
        </Stack.Navigator> 
        </NavigationContainer>
    );
  }
