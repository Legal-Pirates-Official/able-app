import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getRequest, mailer, rejectRequest } from "../../axios/meet";

const ShowRequests = () => {
  const [json, setJson] = useState([]);
  const [crtData, setCrtData] = useState();
  useEffect(() => {
    getRequest().then((res) => {
      res.forEach((item) => {
        // console.log(item,'ll')
        var json1 = JSON.parse(item.booked_slot);

        json1.forEach((element) => {
          console.log(JSON.parse(JSON.stringify(element)), "ele");
          setJson((prev) => {
            console.log(prev, "prev");
            return [...prev, element];
          });
        });
      });
    });
  }, []);
  const handleMail =async(email,timeslot) => {
    await mailer(email,timeslot);
     
  };
  const handleRequest = async (item) => {
    await rejectRequest(item);
  }
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(json)}</Text> */}

      {Object(json).map((item) => (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.title}>{item.email}</Text>
          </View>
          <Text style={styles.title}>{item.timeslot.time_slot}-{item.timeslot.time_slot_am_pm}</Text>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>handleMail(item.email,item.timeslot)}><Text>Accept</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleReject(item.email)}><Text>Reject</Text></TouchableOpacity>
          </View>
          
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    margin: 10,   
  },
  card: {
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  }
});
export default ShowRequests;
