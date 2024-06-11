import React, {useState, useEffect } from "react"
import { Text, View, Button, TextInput} from 'react-native'
import RNFetchBlob from 'rn-fetch-blob';

const bcrypt = require('bcryptjs');


export default function Connexion({navigation}) {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('')
    const [missingCredentials,  setMissingCredentials] = useState(false)
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    
    function fetchUsers() {
        RNFetchBlob.config({ trusty: true })
          .fetch(
            'POST',
            'https://192.168.1.109:8000/authentication',
            {'Content-Type' : 'application/json'},
            JSON.stringify({
              "emailAddress": "rredford@yahoo.com",
              "password": "qRN7pBeN12!"
            })
          )
          .then((resp) => {
            console.log(resp.data)
            // Vérifier si la réponse est correcte
            if (resp.respInfo.status === 200) {
              let userArray = JSON.parse(resp.data)
              setUser(userArray)
            } else {
              console.error('Response status is not 200: ', resp.respInfo.status);
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
      }, [user])
      
     // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécutera une seule fois après le montage du composant

    // //Fonction asynchrone pour vérifier la validité des identifiants et afficher le message d'erreur en conséquence.
    // async function checkCredentials() {
    //     if (emailAddress === '' || password === '') {
    //       setMissingCredentials(true);
    //       setInvalidCredentials(false);
    //     } else {
    //       let credentialsValid = false;
    
    //       for (let user of allUsers) {
    //         if (user.emailAddress === emailAddress) {
    //           try {
    //             const result = await new Promise((resolve, reject) => {
    //               bcrypt.compare(password, user.password, (err, result) => {
    //                 if (err) reject(err);
    //                 resolve(result);
    //               });
    //             });
    
    //             if (result) {
    //               credentialsValid = true;
    //               navigation.navigate('Homepage', { user });
    //               break;
    //             }
    //           } catch (error) {
    //             console.error('Error comparing passwords: ', error);
    //           }
    //         }
    //       }
    
    //       if (!credentialsValid) {
    //         setInvalidCredentials(true);
    //       }
    //     }
    //   }
    
        
    return (
        <View style={{flex:1, flexDirection: "column", backgroundColor:"rgb(169, 221, 242)", justifyContent:"center", alignItems:"center"}}>
            {missingCredentials && <Text style={{width: 200, fontWeight:600, fontSize:20, color:'red'}}>Veuillez renseigner tous les champs</Text>}
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