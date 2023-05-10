import axios from 'axios'

export const url = 'https://nikita.manucherkm.repl.co'
// export const url = 'http://localhost:5000'

const instance = axios.create({
	baseURL: url,
})

export default instance
