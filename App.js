import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from "./Connexion";
import Homepage from "./Homepage";
import YourAccount from "./YourAccount";
import Reservations from "./Reservations";
import ReservationDeleted from "./ReservationDeleted";
import AccountCreation from "./AccountCreation";
import GeneralConditions from "./GeneralConditions";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Connexion">
            <Stack.Screen name="Homepage" component={Homepage} options={{title:'Votre Application Health North'}}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="YourAccount" component={YourAccount} options={{title:'Votre compte'}}/>
            <Stack.Screen name="Reservations" component={Reservations} options={{title:'Vos rendez-vous'}}/>
            <Stack.Screen name="ReservationDeleted" component={ReservationDeleted} options={{title: 'Réservation annulée'}}/>
            <Stack.Screen name="AccountCreation" component={AccountCreation} options={{title: 'Créer un compte'}}/>
            <Stack.Screen name="GeneralConditions" component={GeneralConditions} options={{title: 'Conditions générales d\'utilisation'}}/>
        </Stack.Navigator> 
        </NavigationContainer>
    );
  }
