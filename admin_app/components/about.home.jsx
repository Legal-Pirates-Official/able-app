import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Form from '../components/Form'

const AboutHome = () => {
  return (
    <View style={styles.maincontainer}>
            <View style={styles.title}>
                <Text style={styles.titletext}>HOME ABOUT</Text>
            </View>
            <Form />
    </View>
  )
}

export default AboutHome


const styles = StyleSheet.create({
    maincontainer:{
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        flex:1,
    },
    title:{
        alignSelf: "center",
        marginBottom: 40,
    },
    titletext:{
        fontSize: 40,
        fontWeight: "bold",
    }
})