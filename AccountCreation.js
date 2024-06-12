import { Text, View, Button, TextInput, ScrollView} from 'react-native'
import MyInput from './components/MyInput';

export default function AccountCreation() {
    return (
        <ScrollView style={{flex:1, flexDirection:"column", backgroundColor:"rgb(169, 221, 242)"}}>
            <MyInput label="Nom" placeholder="Durant"/>
        </ScrollView>
      );
}