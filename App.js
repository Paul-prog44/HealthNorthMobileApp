import React from "react"
import {Image, Text, View, ScrollView} from 'react-native'
import homepage from "./style"

export default class Homepage extends React.Component {

    render () {
        return (
            <ScrollView style={homepage.view}>
                    <Text style={homepage.title}>Votre application North Health</Text>
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
        )
    }

}