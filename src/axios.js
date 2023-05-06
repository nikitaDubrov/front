import axios from 'axios'

export const url = 'https://project-1-1.manucherkm.repl.co'
// export const url = 'http://localhost:5000'

const instance = axios.create({
	baseURL: url,
})

export default instance
