export default function Connexion() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{flex:1, flexDirection: "column", backgroundColor:"rgb(169, 221, 242)", justifyContent:"center", alignItems:"center"}}>
            
            <Text style={{width: 200, fontWeight:600, fontSize:20}}>Votre adresse email :</Text>
            <TextInput name="emailAddress"style={{height: 40, width: 200, backgroundColor : "white"}}
                        placeholder="smith@gmail.com"
                        onChangeText={newText => setEmailAddress(newText)}
                        defaultValue={emailAddress}/>
            
            <Text style={{width: 200, fontWeight:600, fontSize:20}}>Votre mot de passe :</Text>            
            <TextInput name="password" 
                        style={{height: 40, width: 200, backgroundColor : "white" , marginBottom: 20}}
                        placeholder="Mot de passe"
                        onChangeText={newText => setPassword(newText)}
                        defaultValue={password}/>
            <Button title="Se connecter"
                onPress={() => Alert.alert('Simple Button pressed')}/>
            
        </View>
    )
}