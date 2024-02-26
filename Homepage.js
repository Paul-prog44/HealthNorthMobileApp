import {Image, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native'
import homepage from "./style"




export default function Homepage ({navigation}) {
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
                        catalogue de services couvre tous les aspects du diagnostic, notamment dans les domaines suivants :
                    </Text>
                    <View style={homepage.imageView}>
                        <Image source={require('./img/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg')}
                        style={homepage.image}/>
                    </View>
        </ScrollView>
        <View style={{backgroundColor:"rgb(169, 221, 242)", height:50}} >
            <View style={{ flex:1, flexDirection: "row", justifyContent:"space-between"}}>

            <Button title="Votre compte"
            onPress={() => navigation.navigate('YourAccount')}/>

            {/* <Button title="Connexion"
            onPress={() => navigation.navigate('Connexion')}/> */}

            <Button title="Vos réservations"
            onPress={() => navigation.navigate('Reservations')}/>                                
            </View>
        </View>
        </>
    )
}