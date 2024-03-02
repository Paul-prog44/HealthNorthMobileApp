import RNFetchBlob from 'rn-fetch-blob';
import {
  Text,
  View,
} from 'react-native';
import {useState, useEffect} from 'react';

export default function Reservations({route}) {
  const {user} = route.params;
  let [reservationsArray, setReservations] = useState();

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
        })
        .catch(error => {
          console.error('Error downloading file: ', error);
        });
    }

    fetchApi();
  }, []);

  if (reservationsArray) {
    console.log(reservationsArray);
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
        <Text style={{marginVertical: 10, fontWeight: 400, fontSize: 16}}>
          Date : {dateObject.toLocaleTimeString('fr-FR', options)}
        </Text>
        <Text style={{marginVertical: 10, fontWeight: 400, fontSize: 16}}>
          {reservation.center.name}
        </Text>
        <Text style={{marginVertical: 10, fontWeight: 400, fontSize: 16}}>
          Docteur : {reservation.doctor.lastName}
        </Text>
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
      {reservationsArray === undefined
        ? null
        : reservationsArray.map((reservation, index) => (
            <Reservation key={index} reservation={reservation} />
          ))}
    </View>
  );
}
