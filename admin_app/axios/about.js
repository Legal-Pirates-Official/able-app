const axios = require("axios");

// const aboutforms = [
//     about_description,
//     card_title,
//     card_description,
//     card_image,
// ];
const baseURL = "http://192.168.1.7:3000";

export const getAbout = async (values) => await axios.get(`${baseURL}/about`);

export const postAbout = async (values, photo) => {
    try {
        return await axios.post(`${baseURL}/about`, {values, photo});
    } catch (error) {
        console.log(error);
    }
};
