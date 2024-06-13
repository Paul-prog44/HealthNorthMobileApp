import BouncyCheckbox from "react-native-bouncy-checkbox";


function CguCheckbox({setNewUser}) {

    const handleChange = ((isChecked) => {
        setNewUser(prevState => ({
            ...prevState,
            acceptCgu:isChecked
        }))
    })


    return (
            <BouncyCheckbox
              size={25}
              fillColor="blue"
              unFillColor="#FFFFFF"
              text="Accepter les CGU"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked) => {handleChange(isChecked)}}
            />
        
    )
}

export default CguCheckbox