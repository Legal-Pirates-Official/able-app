const axios = require("axios");

const baseURL = "http://192.168.0.103:8080";

export const addSlot = async (dates,values,meetLink,email) => {
    // var json = JSON.stringify(values);
    try {
        console.log(dates,'p',values,'ll');
        return await axios.post(`${baseURL}/meet/addslot`,{
            time_slot: values,
            date:dates,
            meetLink: meetLink,
            email:email
        }).then((res) => {
            console.log(res.data);
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};

export const getSlot = async (date) => {
    console.log(date,'p');
    try {
        // console.log(dates,'p',values,'ll');
        return await axios.post(`${baseURL}/meet/getslot/`,{
            date
        }).then((res) => {
            console.log(res.data);
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};



export const sendMail = async (email,name,date,timeslot,slots) => {
    console.log(email,name,date,timeslot,'p');
    try {
        // console.log(dates,'p',values,'ll');
        return await axios.post(`${baseURL}/meet/mail/`,{
            email,
            name,
            date,
            timeslot,
            slots
        }).then((res) => {
            console.log(res.data);
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};