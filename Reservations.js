import RNFetchBlob from "rn-fetch-blob";
import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'


export default function Reservations() {
    function fetchApi() {
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
            <Button title="Recharger l'API" onPress={() => fetchApi()} />

        </View>

    </View>
    )
}