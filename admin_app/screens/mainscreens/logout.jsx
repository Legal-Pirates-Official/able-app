import React from 'react'
import { TouchableOpacity , Text, View, StyleSheet, Dimensions} from 'react-native'
import { AuthContext } from '../../components/context'

const Logout = () => {

    const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.aboutbtn} onPress={()=>signOut()}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({
    aboutbtn:{
        width: Dimensions.get('window').width / 2.9,
        height: Dimensions.get('window').height / 11,
        borderColor: '#00BFFF',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 20,
    },
})