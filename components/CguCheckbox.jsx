import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";




    function CguCheckbox({setNewUser, navigation}) {

    const handleChange = ((isChecked) => {
        setNewUser(prevState => ({
            ...prevState,
            acceptCgu:isChecked
        }))
    })

    const handleClick = (() => navigation.navigate('GeneralConditions'))

    return (
        <View style={{
                flex:1,
                flexDirection:"row",
                justifyContent: "center",
                marginBottom:10
                }}>
            <BouncyCheckbox
              size={25}
              fillColor="blue"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked) => {handleChange(isChecked)}}
            />
            <Text 
                onPress={handleClick}
                style={{
                    textDecorationLine: 'underline'
                }}
                >J'accepte les Conditions Générales d'Utilisation</Text>
        </View>
    )
}

export default CguCheckbox