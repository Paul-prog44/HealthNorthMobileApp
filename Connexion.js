import React, {useState, useEffect } from "react"
import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
import RNFetchBlob from 'rn-fetch-blob';
const bcrypt = require('bcryptjs');



export default function Connexion({navigation}) {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUser] = useState(null);

    useEffect(() => {
      function fetchUsers() {
        RNFetchBlob.config({ trusty: true })
          .fetch('get', 'https://192.168.1.109:8000/api/patients')
          .then((resp) => {
            let usersData = JSON.parse(resp.data);
            setUser(usersData);
            console.log(usersData)
          })
          .catch((error) => {
            console.error('Error downloading file: ', error);
          });
        }
        fetchUsers()
    }, [])
        
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
                onPress={() => navigation.navigate('Homepage')}/>
            
        </View>
    )
}