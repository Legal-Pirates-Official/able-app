import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getSlot, sendMail } from "../../axios/meet";

const Interaction = () => {
  const [close, setClose] = useState(true);
  const [dates,setDates] = useState('');
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [selectedTime,setSelectedTime] = useState('');
  const [slots,setSlots] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    var strng = date.toLocaleString();
    setDates(strng.slice(0, strng.indexOf(",")));
    console.log(dates,'j');
    getSlot(strng.slice(0, strng.indexOf(","))).then(res => {
      setSlots(JSON.parse(res[0].time_slot));
      console.log('====================================');
      console.log(JSON.parse(res[0]));
      console.log('====================================');
    });
    hideDatePicker();
    setClose(false);
    setSlots([]);
  };
  const handleTime = (item) => {
    setSelectedTime(item);
    setClose(true);
  }


  const handleMail = () => {
    console.log(email);
    console.log(name);
    console.log(dates);
    console.log(selectedTime);
    sendMail(email,name,dates,selectedTime,slots).then(res => {
      console.log(res);
    });
    
  }
  return (
    <View style={{ justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 60,
    }}>
      <TouchableOpacity onPress={()=>setDatePickerVisibility(true)}><Text style={styles.text}>{selectedTime? `${dates} ${selectedTime.time_slot}-${selectedTime.time_slot_am_pm}`:'Pick a Date'}</Text></TouchableOpacity>
      
     {isDatePickerVisible ? <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />:null}
      
        {!close ?<View style={styles.timeslot}>
            <ScrollView>
          
            
         {slots.length > 0 ? slots.map((item,index)=>{
          return <TouchableOpacity onPress={()=>handleTime(item)} style={styles.slot}><Text style={styles.btn}>{item.time_slot}-{item.time_slot_am_pm}</Text></TouchableOpacity>})
          : <Text>No Slots Available</Text>}
          
          </ScrollView>
          
        </View>: null}
        <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        
        value={email}
        placeholder="Enter Email"
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        
        value={name}
        placeholder="Enter Name"
        // keyboardType="numeric"
      />
      <TouchableOpacity style={
        {
          backgroundColor: '#00b5ec',
          padding:10,
          paddingHorizontal:20,
          borderRadius: 15,
          marginTop: 20,
        }
      } onPress={()=>handleMail()}><Text style={styles.text}>Send Request</Text></TouchableOpacity>
      </View>
    // </View>
  );
};

export default Interaction;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  timeslot: {
    // position: 'absolute',
    width: "80%",
    borderRadius: 10,
    elevation: 18,
    backgroundColor: "#fff",
    marginVertical: 50,
    height: 300,
    // backgroundColor: "grey",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  slot : {
    // backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    borderColor: '#f0f0f0',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    textAlign: 'center'
  },
  btn : {
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  }
});

