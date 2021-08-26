import axios from "axios";

//const baseURL = "https://c4ad5875-e804-4639-bd44-a07b3a2f480d.mock.pstmn.io/api/";
const baseURL = "https://tomorrowars.herokuapp.com/";

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		//Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		'Authorization': 'Bearer a79a083ea2c360bbc6d07ebf9a7ebeec800fb302',
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;
