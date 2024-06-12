import { Button, ScrollView, Text} from 'react-native'
import MyInput from './components/MyInput';
import { useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';


export default function AccountCreation() {
    const [newUser, setNewUser] = useState({
        gender:"",
        lastName:"",
        firstName:"",
        address:"",
        city:"",
        emailAddress:"",
        password:"",
        passwordConfirmation:"",
        socialSecurity:""
    })
    const [errorCreatingUser, setErrorCreatingUser] = useState("")

    function postUser() {
        RNFetchBlob.config({ trusty: true })
          .fetch(
            'POST',
            'https://192.168.1.109:8000/api/patients',
            {'Content-Type' : 'application/json'},
            JSON.stringify(newUser)
          )
          .then((resp) => {
            // Vérifier si la réponse est correcte
            if (resp.respInfo.status === 201) {
              let userArray = JSON.parse(resp.data)
              setUser(userArray)
            } else {
            //   setInvalidCredentials(true)
            }
          })
          .catch((error) => {
            console.error('Error downloading file: ', error);
          });
      }

    handleSubmit = (() => {
        postUser()
    })

    

    return (
        <ScrollView style={{flex:1, flexDirection:"column", backgroundColor:"rgb(169, 221, 242)"}}>
                    <Text>{newUser.gender}</Text>

            <MyInput label="Sexe" placeholder="M" inputMode="text" setNewUser={setNewUser} name="gender"/>
            <MyInput label="Nom" placeholder="Durant" inputMode="text" setNewUser={setNewUser} name="lastName"/>
            <MyInput label="Prénom" placeholder="Benard" inputMode="text" setNewUser={setNewUser} name="firstName"/>
            <MyInput label="Adresse" placeholder="5 rue des corneilles" inputMode="text" setNewUser={setNewUser} name="address"/>
            <MyInput label="Ville" placeholder="Marseille" inputMode="text" setNewUser={setNewUser} name="city"/>
            <MyInput label="Numéro de sécurité sociale" placeholder="0123456789" inputMode="decimal" setNewUser={setNewUser} name="socialSecurity"/>
            <MyInput label="Adresse email" placeholder="bdurant@caramail.com" inputMode="email" setNewUser={setNewUser} name="emailAddress"/>
            <MyInput label="Mot de passe" placeholder="" secure={true} setNewUser={setNewUser} name="password"/>
            <MyInput label="Vérification mot de passe" placeholder="" secure={true} setNewUser={setNewUser} name="passwordConfirmation"/>
            {errorCreatingUser && "Une erreur est survenu, merci de réessayer"}
            <Button title="Créer mon compte" onPress={handleSubmit}/>

        </ScrollView>
      );
}