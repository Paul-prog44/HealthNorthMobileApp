import React, {useState, useEffect } from "react"
import { Text, View, Button, TextInput, Image} from 'react-native'
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
          navigation.navigate('Homepage', { user });
        }
      }, [user, ])


        
    return (
        <View style={{flex:1, flexDirection: "column", backgroundColor:"rgb(169, 221, 242)", justifyContent:"center", alignItems:"center"}}>
            {invalidCredentials && <Text style={{width: 200, fontWeight:600, fontSize:20, color:'red'}}>Mot de passe ou identifiant erroné</Text>}

            <Text style={{
              width: 200, 
              fontWeight:600, 
              fontSize:26, 
              color:'#0275d8', 
              textAlign :'center'
              }}>HEALTH NORTH</Text>

            <Image source={require('./img/Logo.png')} style={{ marginVertical:40}}/>

            <Text style={{
              width: 200, 
              fontWeight:600, 
              fontSize:20
              }}>Votre adresse email :</Text>

            <TextInput name="emailAddress"style={{
              height: 40,
              width: 200,
              backgroundColor : "white", 
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder="smith@gmail.com"
            onChangeText={newText => setEmailAddress(newText)}
            defaultValue={emailAddress}/>
            
            <Text style={{
              width: 200, 
              fontWeight:600, 
              fontSize:20
              }}>Votre mot de passe :</Text>

            <TextInput name="password" style={{
              height: 40, 
              width: 200, 
              backgroundColor : "white" , 
              marginBottom: 20, 
              borderColor: 'gray',
              borderWidth: 1,
            }}
              placeholder="Mot de passe"
              onChangeText={newText => setPassword(newText)}
              secureTextEntry={true}
              defaultValue={password}/>

            <Button title="Se connecter"
                    onPress={() => {
                     fetchUsers()
                    }}/>
            <Button title="Créer un compte"
                    onPress={() => {
                      navigation.navigate('AccountCreation')
                    }}
            ></Button>
        </View>
    )
}