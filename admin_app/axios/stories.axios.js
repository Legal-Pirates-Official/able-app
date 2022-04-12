import axios from 'axios';

const baseUrl = 'http://192.168.0.106:8080/';

export const getStories = () => axios.get(`${baseUrl}admin/stories`);

export const getParticularStory = (id) =>
	axios.get(`${baseUrl}admin/stories/${id}`);

export const InsertAxiosStories = (values) =>
	axios.post(`${baseUrl}admin/stories`, values);

export const UpdateStories = (id, values) =>
	axios.put(`${baseUrl}admin/stories/${id}`, values);

export const DeleteStories = (id, values) =>
	axios.delete(`${baseUrl}admin/stories/${id}`, values);
