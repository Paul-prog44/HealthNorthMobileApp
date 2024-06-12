
import { Text, TextInput, View } from "react-native";

export default function mMInput({label, placeholder, inputMode, secure, setNewUser , name}) {
    const handleChange = ((key, value) => {
        setNewUser(prevState => ({
            ...prevState,
            [key]:value
        }))
    })

    return (
        <View style={{
            alignItems:"center"
        }}>
            <Text style={{
                fontWeight:'bold', 
                fontSize:20
                }}>{label} :
            </Text>
            <TextInput
                style={{
                    height: 40, 
                        width: 300, 
                        backgroundColor : "white" , 
                        marginBottom: 20, 
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                placeholder={placeholder}
                inputMode={inputMode}
                secureTextEntry={secure}
                onChangeText={(text) => handleChange(name, text)}
            />
        </View>
    )
}