const axios = require("axios");

// const aboutforms = [
//     about_description,
//     card_title,
//     card_description,
//     card_image,
// ];
const baseurl = "http://192.168.0.103:8080";

export const getAbout = async (values) => {
  return await axios.get(`${baseurl}/admin/about`);
};

export const postAbout = async (values, photo) => {
  try {
    return await axios.post(`${baseurl}/admin/about`, { values, photo });
  } catch (error) {
    console.log(error);
  }
};
