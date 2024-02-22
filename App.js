import React, {useState} from "react"
import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
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

function YourAccount() {
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
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={{ width: 400 }}/>
                <Button title="Vos alarmes"
                        onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
            </View>
)
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="YourAccount">
            <Stack.Screen name="Homepage" component={Homepage} options={{title:'Accueil'}}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="YourAccount" component={YourAccount} options={{title:'Votre compte'}}/>
        </Stack.Navigator> 
        </NavigationContainer>
    );
  }
