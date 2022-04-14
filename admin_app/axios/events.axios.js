import axios from "axios";

const baseurl = 'http://192.168.43.30:8080';

export const getEvents = ()=> axios.get(`${baseurl}/admin/home/events`)
export const eventsInsert = (values,photo)=> axios.post(`${baseurl}/admin/home/events`,{values,photo});
export const deleteEvents = (id)=> axios.delete(`${baseurl}/admin/home/events/${id}`);