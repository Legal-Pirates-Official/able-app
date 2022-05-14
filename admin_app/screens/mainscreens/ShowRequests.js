import { View, Text, StyleSheet, TouchableOpacity,ScrollView,StatusBar} from "react-native";
import React, { useEffect, useState } from "react";
import { getRequest, mailer, rejectRequest } from "../../axios/meet";

const ShowRequests = ({navigation}) => {

  const [json, setJson] = useState([]);
  const [reject, setReject] = useState(false);
  const [crtData, setCrtData] = useState();
  useEffect(() => {
    getRequest().then((res) => {
      res.forEach((item) => {
        console.log(item,'ll')
        if(item.booked_slot == null) {
          console.log('null');
          return;
        } else {
          console.log('not null',item.booked_slot);
          var json1 = JSON.parse(item.booked_slot);
          json1.forEach((element) => {
            console.log(JSON.parse(JSON.stringify(element)), "ele");
            setJson((prev) => {
              console.log(prev, "prev");
              return [...prev, element];
            });
          });
        } 

        
      });
    });
  }, []);
  const handleMail =async(email,timeslot,date) => {
    await mailer(email,timeslot,date);
    navigation.navigate('ShowRequests')
     
  };
  const handleRequest = async (email,date) => {
    await rejectRequest(email,date);
    navigation.navigate('ShowRequests')
  }
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(json)}</Text> */}
      <ScrollView style={{
        width: '100%',
        
      }}><>

      {Object(json).map((item) =>{
        console.log(item,'item');
         return (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.title}>{item.email}</Text>
            </View>
            <Text style={styles.title}>{item.timeslot.time_slot}-{item.timeslot.time_slot_am_pm}</Text>
            <Text style={styles.title}>{item.date}</Text>
            <View style={styles.row}>
            <TouchableOpacity style={styles.btn1} onPress={()=>handleMail(item.email,item.timeslot,item.date)}><Text>Accept</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={()=>handleRequest(item.email,item.date)}><Text>Reject</Text></TouchableOpacity>
            </View>
          </View>
        )
      })}</>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    margin: 5   
  },
  card: {
    borderWidth: 2,
    borderColor: "black",
    // elevation: 2,
    borderRadius: 20,
    width: '90%',
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    // flexDirection: "row",
  },
  btn1: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderColor: "green",
    borderWidth: 3,
  },
  btn2: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderColor: "red",
    borderWidth: 3,
  }
});
export default ShowRequests;
