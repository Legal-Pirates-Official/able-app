import axios from 'axios';

const baseUrl = 'https://able-server.herokuapp.com/';

export const getStories = () => axios.get(`${baseUrl}admin/stories`);

export const getParticularStory = (id) =>
	axios.get(`${baseUrl}admin/stories/${id}`);

export const insertStories = (values) =>
	axios.post(`${baseUrl}admin/stories`, values);

export const updateStories = (id, values) =>
	axios.put(`${baseUrl}admin/stories/${id}`, values);

export const deleteStories = (id, values) =>
	axios.delete(`${baseUrl}admin/stories/${id}`, values);
