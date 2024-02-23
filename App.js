import React, {useState } from "react"
import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
import homepage from "./style"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNFetchBlob from "rn-fetch-blob";



function Homepage ({navigation}) {
    return (
        <>
        <ScrollView style={homepage.view}>
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
        <View style={{backgroundColor:"rgb(169, 221, 242)", height:50}} >
            <View style={{ flex:1, flexDirection: "row", justifyContent: "space-between"}}>
            <Button title="Votre compte"
            onPress={() => navigation.navigate('YourAccount')}/>
            <Button title="Vos réservations"
            onPress={() => navigation.navigate('Reservations')}/>                                
            </View>
        </View>
        </>
    )
}

function Connexion() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{flex:1, flexDirection: "column", backgroundColor:"rgb(169, 221, 242)", justifyContent:"center", alignItems:"center"}}>
            
            <Text style={{width: 200, fontWeight:600, fontSize:20}}>Votre adresse email :</Text>
            <TextInput name="emailAddress"style={{height: 40, width: 200, backgroundColor : "white"}}
                        placeholder="smith@gmail.com"
                        onChangeText={newText => setEmailAddress(newText)}
                        defaultValue={emailAddress}/>
            
            <Text style={{width: 200, fontWeight:600, fontSize:20}}>Votre mot de passe :</Text>            
            <TextInput name="password" 
                        style={{height: 40, width: 200, backgroundColor : "white" , marginBottom: 20}}
                        placeholder="Mot de passe"
                        onChangeText={newText => setPassword(newText)}
                        defaultValue={password}/>
            <Button title="Se connecter"
                onPress={() => Alert.alert('Simple Button pressed')}/>
            
        </View>
    )
}

function YourAccount({navigation}) {
    return (
            <View style={{ flex:1, justifyContent: "center", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(169, 221, 242)"}}>
                <Text style={{marginVertical:10, fontWeight:600, fontSize:20}}>Vos informations personnelles :</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Prénom : John</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Nom : Smith</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Sécurité sociale : 123456789</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Adresse mail : jsmith@gmail.com</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Téléphone : 0674352689</Text>
                <View>
                <Button title="Vos réservations"
                        onPress={() => navigation.navigate('Reservations')}
                        style={{ width: 400 }}/>
                <Button title="Vos alarmes"
                        onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
            </View>
    )
}

const { config, fs } = RNFetchBlob;
function Reservations() {
    function fechtApi() {
        RNFetchBlob.config({
            trusty : true
          })
          .fetch('get', 'https://192.168.1.109:8000/api/doctors/430') //Adresse IP de l'ordinateur (127.0.0.1 est celle du smartphone...)
          .then((resp) => {
            console.log(resp.data)
          })
          .catch((error) => {
            console.error('Error downloading file: ', error);
          });
        };
    




   
    return (
        
    <View style={{ flex:1, justifyContent: "space-evenly", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(169, 221, 242)"}}>
        <View style={{flex:1, alignItems:"center"}}>
            <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Date : 06/04/24 - Heure : 14h30</Text>
            <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Centre de Paris</Text>
            <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Docteur : Tartempion</Text>
            <Text>____________________________________</Text>
            <Button title="Recharger l'API" onPress={() => fechtApi()} />

        </View>

    </View>
    )
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen name="Homepage" component={Homepage} options={{title:'Votre Application Health North'}}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="YourAccount" component={YourAccount} options={{title:'Votre compte'}}/>
            <Stack.Screen name="Reservations" component={Reservations} options={{title:'Vos rendez-vous'}}/>
        </Stack.Navigator> 
        </NavigationContainer>
    );
  }
