import React, {useState, useEffect } from "react"
import { Text, View, Button, TextInput} from 'react-native'
import RNFetchBlob from 'rn-fetch-blob';

export default function Connexion({navigation}) {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('')
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    
    function fetchUsers() {
        RNFetchBlob.config({ trusty: true })
          .fetch(
            'POST',
            'https://192.168.1.109:8000/authentication',
            {'Content-Type' : 'application/json'},
            JSON.stringify({
              "emailAddress": emailAddress,
              "password": password
            })
          )
          .then((resp) => {
            // Vérifier si la réponse est correcte
            if (resp.respInfo.status === 200) {
              let userArray = JSON.parse(resp.data)
              setUser(userArray)
            } else {
              setInvalidCredentials(true)
            }
          })
          .catch((error) => {
            console.error('Error downloading file: ', error);
          });
      }

      useEffect(() => {
        if (user) {
          navigation.navigate('Homepage', { user })
        }
      }, [user, ])
        
    return (
        <View style={{flex:1, flexDirection: "column", backgroundColor:"rgb(169, 221, 242)", justifyContent:"center", alignItems:"center"}}>
            {invalidCredentials && <Text style={{width: 200, fontWeight:600, fontSize:20, color:'red'}}>Mot de passe ou identifiants erronés</Text>}
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
                        secureTextEntry={true}
                        defaultValue={password}/>
            <Button title="Se connecter"
                onPress={() => {
                  fetchUsers()
                }}/>
            
        </View>
    )
}