const axios = require("axios");
import {baseurl} from '../environment'

<<<<<<< HEAD
const baseURL = "http://192.168.0.101:8080";


export const addSlot = async (dates,values,meetLink,email) => {
    
    try {
        
        return await axios.post(`${baseURL}/meet/addslot`,{
            time_slot: values,
            date:dates,
            meetLink: meetLink,
            email:email
        }).then((res) => {
            console.log(res.data,'rs');
            return res.data;
        });
    } catch (error) {
        console.log(error,'err');
    }
};

export const getSlot = async (date) => {
    console.log(date,'p');
    try {
        
        return await axios.post(`${baseURL}/meet/getslot/`,{
            date
        }).then((res) => {
            console.log(res.data);
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
=======

export const addSlot = async (dates, values, meetLink, email) => {
  // var json = JSON.stringify(values);
  try {
    console.log(dates, "p", values, "ll");
    return await axios
      .post(`${baseurl}/meet/addslot`, {
        time_slot: values,
        date: dates,
        meetLink: meetLink,
        email: email,
      })
      .then((res) => {
        console.log(res.data, "rs");
        return res.data;
      });
  } catch (error) {
    console.log(error, "err");
  }
};

export const getSlot = async (date) => {
  console.log(date, "p");
  try {
    // console.log(dates,'p',values,'ll');
    return await axios
      .post(`${baseurl}/meet/getslot/`, {
        date,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
>>>>>>> 77bf19a806360d3503302d734bc02c7c289fc84b
};

export const getRequest = async () => {
<<<<<<< HEAD
   
    try {
 
        return await axios.get(`${baseURL}/admin/request`).then((res) => {
            console.log(res.data);
            return res.data;
        });
    } catch (error) {
        console.log(error);
    }
};


export const sendMail = async (email,name,date,timeslot,slots) => {
    
    try {

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


export const mailer = async (email,timeslot,date) => {
    
    return await axios.post(`${baseURL}/admin/mail/`,{
=======
  console.log("s", "p");
  try {
    // console.log(dates,'p',values,'ll');
    return await axios.get(`${baseurl}/admin/request`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendMail = async (email, name, date, timeslot, slots) => {
  console.log(email, name, date, timeslot, "p");
  try {
    // console.log(dates,'p',values,'ll');
    return await axios
      .post(`${baseurl}/meet/mail/`, {
>>>>>>> 77bf19a806360d3503302d734bc02c7c289fc84b
        email,
        name,
        date,
        timeslot,
<<<<<<< HEAD
        date
    },(err,res)=> {
        if(err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    })
}

export const meetLinkChange = async (meetLink,email,password) => {

    return await axios.post(`${baseURL}/admin/meetlink/`,{
        meetLink,
        email,
        password
    },(err,res)=> {
        if(err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    })
}
=======
        slots,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> 77bf19a806360d3503302d734bc02c7c289fc84b

export const mailer = async (email, timeslot, date) => {
  return await axios.post(
    `${baseurl}/admin/mail/`,
    {
      email,
      timeslot,
      date,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  );
};

export const meetLinkChange = async (meetLink, email, password) => {
  console.log(meetLink, email, password, "p");
  return await axios.post(
    `${baseurl}/admin/meetlink/`,
    {
      meetLink,
      email,
      password,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  );
};

export const rejectRequest = async (email, timeslot, date) => {
  return await axios.post(
    `${baseurl}/admin/reject/`,
    {
      email,
      timeslot,
      date,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  );
};
