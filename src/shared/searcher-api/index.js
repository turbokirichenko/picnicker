import axios from 'axios';
import { ORIGIN_URL } from './constants';

const searcherAPI = axios.create({
	baseURL: ORIGIN_URL,
	headers: {
		"Content-Type": "application/json",
	}
});

export default searcherAPI;