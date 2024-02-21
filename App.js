import React, {useState} from "react"
import {Image, Text, View, ScrollView, Button, TextInput} from 'react-native'
import homepage from "./style"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Homepage () {
    return (
        <ScrollView style={homepage.view}>
                    <Text style={homepage.title}>Votre application North Health</Text>
                    <Text style={homepage.presentation}> La société HEALTH NORTH fait partie des leaders européens sur les prélèvements médicaux pour les particuliers.
                        Fondé en 1987 avec l'ouverture de trois laboratoires diagnostiques et d'imagerie au Danemark, le
                        groupe s'est rapidement développé en appliquant une stratégie d'acquisition de laboratoires
                        partenaires de qualité sur l'ensemble du continent européen.
                        Cette année, Health NORTH fusionne avec la grande entreprise d'hospitalisation privée, présente en
                        Suède, en Norvège, en Finlande, en France et au Royaume-Uni. Grâce à cette fusion, la structure
                        devient alors le leader incontesté des services diagnostiques et d'hospitalisation en Europe.
                        Health NORTH exploite son expertise en médecine de laboratoire, en imagerie et en pathologie pour
                        fournir des réponses aux questions diagnostiques dans toutes les disciplines médicales. Notre
                        catalogue de services couvre tous les aspects du diagnostic, notamment dans les domaines suivants :
                    </Text>
                    <View style={homepage.imageView}>
                        <Image source={require('./img/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg')}
                        style={homepage.image}/>
                    </View>
            </ScrollView>
    )
}

function Connexion() {
    const [text, setText] = useState('');
    return (
        <View>
            <Text>Votre adresse email :</Text>
            <TextInput name="emailAddress"style={{height: 40}}
                        placeholder="smith@gmail.com"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}/>
            <Text>Votre mot de passe :</Text>            
            <TextInput name="password" 
                        style={{height: 40}}
                        placeholder="sMot de passe"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}/>
                
        </View>
    )
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Connexion">
            <Stack.Screen name="Homepage" component={Homepage} options={{title:'Accueil'}}/>
            <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator> 
        </NavigationContainer>
    );
  }
