import axios from 'axios'
import { API_URL } from '../config/index.config'

const instance = axios.create({
	baseURL: API_URL,
})

export default instance
