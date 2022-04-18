const axios = require("axios");

// const aboutforms = [
//     about_description,
//     card_title,
//     card_description,
//     card_image,
// ];
const baseURL = "http://192.168.0.103:8080";

export const getAbout = async (values) =>{ 
    console.log('k');
   return await axios.get(`${baseURL}/admin/about`)
};


export const postAbout = async (values, photo) => {
    try {
        return await axios.post(`${baseURL}/admin/about`, {values, photo});
    } catch (error) {
        console.log(error);
    }
};
