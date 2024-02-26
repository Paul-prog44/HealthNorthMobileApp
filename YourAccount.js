import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default function YourAccount({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function fetchUser() {
      RNFetchBlob.config({ trusty: true })
        .fetch('get', 'https://192.168.1.109:8000/api/patients/426')
        .then((resp) => {
          let userData = JSON.parse(resp.data);
          setUser(userData);
        })
        .catch((error) => {
          console.error('Error downloading file: ', error);
        });
    }

    fetchUser();
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécutera une seule fois après le montage du composant

  return (
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(169, 221, 242)' }}>
      <Text style={{ marginVertical: 10, fontWeight: 600, fontSize: 20 }}>Vos informations personnelles :</Text>
      {user && (
        <>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Prénom : {user.firstName}</Text>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Nom : {user.lastName}</Text>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Sécurité sociale : {user.socialSecurity}</Text>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Adresse mail : {user.emailAddress}</Text>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Adresse : {user.address}</Text>
          <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Ville : {user.city}</Text>
        </>
      )}

      <View>
        <Button title="Vos réservations" onPress={() => navigation.navigate('Reservations')} style={{ width: 400 }} />
        <Button title="Vos alarmes" onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
    </View>
  );
}
