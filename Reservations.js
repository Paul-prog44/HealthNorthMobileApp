import RNFetchBlob from 'rn-fetch-blob';
import {
  Text,
  ScrollView
} from 'react-native';
import {useState, useEffect} from 'react';
import Reservation from './components/Reservation';

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


  return (
    <ScrollView style={{backgroundColor: 'rgb(169, 221, 242)'}}>
    {reservationsArray.length === 0 &&<Text>Vous n'avez pas de réservation</Text>}
      {reservationsArray.map((reservation, index) => (
            <Reservation key={index} reservation={reservation} navigation={navigation} user={route.params}/>
          ))}
    </ScrollView>
  );
}
