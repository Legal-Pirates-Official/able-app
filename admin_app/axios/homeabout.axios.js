import axios from "axios";

const baseurl = 'http://192.168.43.30:8080';

export const aboutget = () => axios.get(`${baseurl}/admin/home/about`);
export const aboutupdate = (values) => axios.post(`${baseurl}/admin/home/about`, { values });