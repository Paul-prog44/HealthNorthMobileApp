import {Button, Text, View} from 'react-native';

export default function ReservationDeleted({navigation, route}) {
  const {user} = route.params;
  console.log();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(169, 221, 242)',
      }}>
      <Text fontSize="20" fontWeight='bold'>Votre réservation a bien été supprimée.</Text>
      <Button
        title="Votre compte"
        onPress={() => navigation.navigate('YourAccount', {user: user})}
      />
    </View>
  );
}
