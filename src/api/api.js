import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://localhost:8080/',
	// headers: {
	// 	"API-KEY": "",
	// }
});

export const userAPI = {
	async getUser(id) {
		const response = await instance.get(`users/${id}`);
		return response.data;
	},
}

