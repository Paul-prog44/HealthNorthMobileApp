import { ScrollView, StyleSheet, Text } from "react-native";


function GeneralConditions() {
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: 'rgb(169, 221, 242)'
        },
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        h3: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
        },
        p: {
            fontSize: 16,
            marginBottom: 40,
        },
        li: {
            fontSize: 16,
            marginBottom: 5,
            paddingLeft: 10,
        },
    });

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Conditions Générales d'utilisation du site Health North</Text>
            <Text style={styles.p}>Dernière mise à jour : 19/02/2024</Text>
            <Text style={styles.p}>
                Bienvenue sur le site web de Health North (www.healthnorth.com). En accédant et en utilisant ce Site, vous acceptez les présentes Conditions Générales d'Utilisation ("CGU"). Veuillez les lire attentivement avant de naviguer sur le Site.
            </Text>
            <Text style={styles.h3}>1. Utilisation du Site</Text>
            <Text style={styles.li}>• Vous acceptez d'utiliser le Site conformément à toutes les lois applicables et aux présentes CGU.</Text>
            <Text style={styles.li}>• Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe.</Text>
            <Text style={styles.li}>• Health North se réserve le droit de modifier, suspendre ou interrompre le Site, en tout ou en partie, à tout moment, sans préavis.</Text>
            <Text style={styles.h3}>Contenu du Site</Text>
            <Text style={styles.li}>• Le contenu du Site est fourni à titre informatif uniquement. Health North ne garantit pas l'exactitude, l'exhaustivité ou la pertinence du contenu.</Text>
            <Text style={styles.li}>• Vous reconnaissez que l'utilisation du contenu du Site est à vos propres risques. Health North ne sera pas responsable des dommages résultant de l'utilisation du contenu du Site.</Text>
            <Text style={styles.h3}>Propriété Intellectuelle</Text>
            <Text style={styles.li}>• Le contenu du Site, y compris mais sans s'y limiter, les textes, images, logos, et vidéos, est la propriété exclusive de Health North et est protégé par les lois sur la propriété intellectuelle.</Text>
            <Text style={styles.li}>• Vous vous engagez à ne pas reproduire, distribuer, modifier, transmettre, réutiliser, republier ou afficher le contenu du Site sans l'autorisation écrite préalable de Health North.</Text>
            <Text style={styles.h3}>Liens vers des Sites Tiers</Text>
            <Text style={styles.li}>• Le Site peut contenir des liens vers des sites web de tiers. Health North n'assume aucune responsabilité quant au contenu ou à la politique de confidentialité de ces sites.</Text>
            <Text style={styles.h3}>Confidentialité</Text>
            <Text style={styles.li}>• Les informations personnelles que vous fournissez sur le Site sont soumises à notre Politique de Confidentialité.</Text>
            <Text style={styles.h3}>Limitation de Responsabilité</Text>
            <Text style={styles.li}>• Dans toute la mesure permise par la loi, Health North décline toute responsabilité pour les dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser le Site.</Text>
            <Text style={styles.h3}>Dispositions Diverses</Text>
            <Text style={styles.li}>• Les présentes CGU constituent l'intégralité de l'accord entre vous et Health North concernant l'utilisation du Site.</Text>
            <Text style={styles.li}>• Ces CGU sont régies par les lois en vigueur.</Text>
            <Text style={styles.p}>
                En utilisant le Site, vous acceptez ces CGU. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le Site.
            </Text>
            <Text style={styles.p}>
                Pour toute question concernant ces CGU, veuillez nous contacter à l'adresse suivante : contact@northhealth.com.
            </Text>
        </ScrollView>
    )
}

export default GeneralConditions