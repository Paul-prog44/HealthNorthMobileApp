import RNFetchBlob from 'rn-fetch-blob';
import {
  Text,
  View,
  Button
} from 'react-native';
import {useState, useEffect} from 'react';

export default function Reservations({route, navigation}) {
  const {user} = route.params;
  let [reservationsArray, setReservations] = useState([]);

  useEffect(() => {
    function fetchApi() {
      RNFetchBlob.config({
        trusty: true,
      })
        .fetch(
          'get',
          'https://192.168.1.109:8000/api/medicalFiles/' + user.medicalFile.id,
        ) //Adresse IP de l'ordinateur (127.0.0.1 est celle du smartphone...)
        .then(resp => {
          let medicalFile = JSON.parse(resp.data);
          setReservations(medicalFile.reservations);
          console.log(medicalFile.reservations)
        })
        .catch(error => {
          console.error('Error downloading file: ', error);
        });
    }

    fetchApi();
  }, []);
  

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




  const Reservation = ({reservation}) => {
    const dateString = reservation.date;
    const dateObject = new Date(dateString);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Europe/Paris',  //Fuseau horaire français
    };

    

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


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(169, 221, 242)',
      }}>
      {reservationsArray.length === 0
        ?<Text>Vous n'avez pas de réservation</Text>
        : reservationsArray.map((reservation, index) => (
            <Reservation key={index} reservation={reservation} />
          ))}
    </View>
  );
}
