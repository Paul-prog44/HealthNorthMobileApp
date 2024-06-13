import { Button, Text, View } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';



function Reservation({reservation, navigation}) {
    const dateString = reservation.date;
    const dateObject = new Date(dateString);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Europe/Paris',  //Fuseau horaire français
    };

    function deleteReservation(reservationId) {
        RNFetchBlob.config({
          trusty: true,
        })
          .fetch(
            'DELETE',
            'https://192.168.1.109:8000/api/reservations/' + reservationId,
          ) //Adresse IP de l'ordinateur (127.0.0.1 est celle du smartphone...)
          .then(resp => {
            if (resp.respInfo.status === 204) {
              //redirection vers confirmation de suppression
              navigation.navigate('ReservationDeleted',  {user : user})
            }
          })
          .catch(error => {
            console.error('Error downloading file: ', error);
          });
      }
    

    return (

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{marginVertical: 5, fontWeight: 400, fontSize: 16}}>
          Date : {dateObject.toLocaleTimeString('fr-FR', options)}
        </Text>
        <Text style={{marginVertical: 5, fontWeight: 400, fontSize: 16}}>
          {reservation.center.name}
        </Text>
        <Text style={{marginVertical: 5, fontWeight: 400, fontSize: 16}}>
          Docteur : {reservation.doctor.lastName}
        </Text>
        <Button
          onPress={()=> deleteReservation(reservation.id)} title="Annuler"/>
        <Text>____________________________________</Text>
      </View>
    );
  };

  export default Reservation