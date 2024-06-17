import { Button, ScrollView, Text} from 'react-native'
import MyInput from './components/MyInput';
import { useEffect, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import CguCheckbox from './components/CguCheckbox';



export default function AccountCreation({navigation}) {
    const [newUser, setNewUser] = useState({
        gender:"",
        lastName:"",
        firstName:"",
        address:"",
        city:"",
        emailAddress:"",
        password:"",
        passwordConfirmation:"",
        socialSecurity:"",
        acceptCgu:false
    })
    const [error, setError] = useState("")
    const [user, setUser] = useState('')



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
            } else if (resp.respInfo.status === 409) {
                setError("Cette adresse mail est déjà associée à un compte, veuillez vous connecter.")
            } else {
                setError("Une erreur est survenue, merci de réessayer")
            }
          })
          .catch((error) => {
            console.error('Error downloading file: ', error);
          });
      }

    //Vérification de la complexité du mot de passe
      function checkPassword(password) {
        const requiredPoints = 10;
        const length = password.length;
        let points_length = 0;
        let points_comp = 0;
        
        if (length >= 10) {
            points_length += 1;
        }
        if (/[a-z]/.test(password)) {
            points_comp += 1;
        }
        if (/[A-Z]/.test(password)) {
            points_comp += 2;
        }
        if (/[0-9]/.test(password)) {
            points_comp += 3;
        }
        if (/\W/.test(password)) {
            points_comp += 4;
        }
        
        const results = points_length * points_comp;
        return (results === requiredPoints);
    }

    //Vérification des inputs
    handleSubmit = (() => {
        if (newUser.address && newUser.city && newUser.emailAddress && newUser.firstName && 
            newUser.gender && newUser.lastName && newUser.password && newUser.passwordConfirmation
            && newUser.socialSecurity && newUser.acceptCgu=== true ) {
            if (newUser.password === newUser.passwordConfirmation) {
                if (checkPassword(newUser.password)) {
                    postUser()
                } else {
                    setError("Le mot de passe doit comporter au moins 10 caractères, une minuscule, une majuscule et un caractère spécial.")
                }
            } else {
                setError("Les mots de passe ne sont pas identiques")
            }
        } else {
            setError("Veuillez renseigner tous les champs")
        }
        

    })

    useEffect(() => {
        if (user) {
        navigation.navigate('Homepage', { user });
        }
    }, [user])

    

    return (
        <ScrollView style={{flex:1, flexDirection:"column", backgroundColor:"rgb(169, 221, 242)"}}>
            <MyInput label="Sexe" placeholder="M" inputMode="text" setNewUser={setNewUser} name="gender"/>
            <MyInput label="Nom" placeholder="Durant" inputMode="text" setNewUser={setNewUser} name="lastName"/>
            <MyInput label="Prénom" placeholder="Benard" inputMode="text" setNewUser={setNewUser} name="firstName"/>
            <MyInput label="Adresse" placeholder="5 rue des corneilles" inputMode="text" setNewUser={setNewUser} name="address"/>
            <MyInput label="Ville" placeholder="Marseille" inputMode="text" setNewUser={setNewUser} name="city"/>
            <MyInput label="Numéro de sécurité sociale" placeholder="0123456789" inputMode="decimal" setNewUser={setNewUser} name="socialSecurity"/>
            <MyInput label="Adresse email" placeholder="bdurant@caramail.com" inputMode="email" setNewUser={setNewUser} name="emailAddress"/>
            <MyInput label="Mot de passe" placeholder="" secure={true} setNewUser={setNewUser} name="password"/>
            <MyInput label="Vérification mot de passe" placeholder="" secure={true} setNewUser={setNewUser} name="passwordConfirmation"/>
            <CguCheckbox setNewUser={setNewUser} navigation={navigation} />
            {error && <Text style={{
                fontWeight:'bold', 
                fontSize:20,
                color:"red"
                }}>{error}</Text>}
            <Button title="Créer mon compte" onPress={handleSubmit}/>

        </ScrollView>
      );
}