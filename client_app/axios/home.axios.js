import axios from 'axios';

const baseurl = 'http://192.168.43.30:8080';

export const aboutget = () => axios.get(`${baseurl}/admin/home/about`);
export const getEvents = ()=> axios.get(`${baseurl}/admin/home/events`);
export const getyoutube = ()=> axios.get(`${baseurl}/admin/home/youtube`);
