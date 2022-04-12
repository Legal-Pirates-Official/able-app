import axios from 'axios';

// const baseUrl = 'https://able-server.herokuapp.com/';
const baseUrl = 'http://192.168.0.106:8080';

export const getStories = () => axios.get(`${baseUrl}admin/stories`);

export const getParticularStory = (id) =>
	axios.get(`${baseUrl}admin/stories/${id}`);

export const updateOrInsertStories = (values, id, photo) => {
	return axios.post(
		id ? `${baseUrl}admin/stories/${id}` : `${baseUrl}admin/stories/`,
		{ values, photo }
	);
};
export const deleteStories = (id, values) =>
	axios.delete(`${baseUrl}admin/stories/${id}`, values);
