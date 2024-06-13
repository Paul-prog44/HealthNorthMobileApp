import {Image, Text, View, ScrollView, Button} from 'react-native'
import homepage from "./style"
import { useEffect, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';



export default function Homepage ({navigation, route}) {
    const { user } =  route.params //récupération du user
    const [specialtiesArray, setSpecialtiesArray] = useState([])


    useEffect(() => {
        function fetchSpecialties() {
          RNFetchBlob.config({
            trusty: true,
          })
            .fetch(
              'get',
              'https://192.168.1.109:8000/api/specialties',
            ) //Adresse IP de l'ordinateur (127.0.0.1 est celle du smartphone...)
            .then(resp => {
              let specialtiesApi = JSON.parse(resp.data);
              setSpecialtiesArray(specialtiesApi);
            })
            .catch(error => {
              console.error('Error downloading file: ', error);
            });
        }
      
        fetchSpecialties();
      }, []);

      
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
                        catalogue de services couvre toutes les spécialités médicales, notamment dans les domaines suivants :
                    </Text>
                    <View style={homepage.imageView}>
                        <Image source={require('./img/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg')}
                        style={homepage.image}/>
                        {specialtiesArray.map((specialty)=>
                            <Text style={{fontWeight: '700', padding: 5}} key={specialty.name}>{specialty.name}</Text>
                        )}
                    </View>
        </ScrollView>
        <View style={{backgroundColor:"rgb(169, 221, 242)", height:50}} >
            <View style={{ flex:1, flexDirection: "row", justifyContent:"space-between"}}>

            <Button title="Votre compte"
            onPress={() => navigation.navigate('YourAccount',
            { user : user})
            }/>

            {/* <Button title="Connexion"
            onPress={() => navigation.navigate('Connexion')}/> */}

            <Button title="Vos réservations"
            onPress={() => navigation.navigate('Reservations',
            { user : user}
            )}/>                                
            </View>
        </View>
        </>
    )
}