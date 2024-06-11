import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function YourAccount({ navigation, route }) {
  const { user } =  route.params

  console.log(user)

  return (
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(169, 221, 242)' }}>
      <Text style={{ marginVertical: 10, fontWeight: 600, fontSize: 20 }}>Vos informations personnelles :</Text>

          {user && (
            <>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Civilité : {user.gender}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Prénom : {user.firstName}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Nom : {user.lastName}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Sécurité sociale : {user.socialSecurity}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Adresse mail : {user.emailAddress}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Adresse : {user.address}</Text>
              <Text style={{ marginVertical: 10, fontWeight: 400, fontSize: 16 }}>Ville : {user.city}</Text>
            </>
          )
        }
      

      <View>
        <Button title="Vos réservations" onPress={() => navigation.navigate('Reservations',
        {user : user})} style={{ width: 400 }} />
        <Button title="Vos alarmes" onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
    </View>
  );
}
