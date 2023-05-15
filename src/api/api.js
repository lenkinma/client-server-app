import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:3001/',
	// headers: {
	// 	"API-KEY": "",
	// }
});

export const userAPI = {
	async getUser(id) {
		const response = await instance.get(`${id}`);
		return response.data;
	},
}

