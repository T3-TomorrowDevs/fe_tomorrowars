import axios from "axios";

const baseURL = "https://c4ad5875-e804-4639-bd44-a07b3a2f480d.mock.pstmn.io/api/";

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;