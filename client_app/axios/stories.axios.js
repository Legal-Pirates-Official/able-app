import axios from 'axios';

const baseUrl = 'https://able-server.herokuapp.com/';
// const baseUrl = 'http://192.168.0.106:8080/';

export const getStories = () => axios.get(`${baseUrl}admin/stories`);
