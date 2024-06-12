
import { Text, TextInput, View } from "react-native";

export default function mMInput({label, placeholder}) {

    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize:20}}>{label} :</Text>
            <TextInput
                style={{height: 40, width: 300, backgroundColor : "white" , marginBottom: 20, borderColor: 'gray',
                    borderWidth: 1,}}
                placeholder={placeholder}
            />
        </View>
    )
}