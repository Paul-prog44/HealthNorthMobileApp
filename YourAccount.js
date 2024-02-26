import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
import RNFetchBlob from "rn-fetch-blob";



export default function YourAccount({navigation}) {
    function fetchUser() 
    {
        RNFetchBlob.config({
            trusty : true
        })
        .fetch('get', 'https://192.168.1.109:8000/api/patients/426') //Adresse IP de l'ordinateur (127.0.0.1 est celle du smartphone...)
        .then((resp) => {
            user = JSON.parse(resp.data) //Stockage des infos de l'utilisateur sous forme de tableau asso
        })
        .catch((error) => {
            console.error('Error downloading file: ', error);
        });
    }
    fetchUser()

    return (
            <View style={{ flex:1, justifyContent: "center", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(169, 221, 242)"}}>
                <Text style={{marginVertical:10, fontWeight:600, fontSize:20}}>Vos informations personnelles :</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Prénom : {user.firstName}</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Nom : {user.lastName}</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Sécurité sociale : {user.socialSecurity}</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Adresse mail : {user.emailAddress}</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Adresse : {user.address}</Text>
                <Text style={{marginVertical:10, fontWeight:400, fontSize:16}}>Ville : {user.city}</Text>

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