import { create } from 'zustand'
import axios from '../axios'
import { templateRoles } from './config'

const useStore = create(set => ({
	auth: false,
	login: async (login, password) => {
		if (!login || !password) {
			return
		}

		const params = {
			email: login,
			password,
		}

		const { data } = await axios.post('/admin/auth', params)

		if (!data) {
			return
		}

		set({ auth: true })

		return data
	},
	logout: () => {
		set({ auth: false })
	},
	getDivisions: async () => {
		const { data } = await axios.get('/subdivisions')

		if (!data) {
			return
		}

		return data.subdivisions
	},
	getManagements: async () => {
		const { data } = await axios.get('/employees')

		if (!data) {
			return
		}

		const res = []

		for (const employee of data.employees) {
			if (res.length === 8) {
				return res
			}

			if (
				employee.role === templateRoles.director ||
				templateRoles.deputyDirector
			) {
				res.push(employee)
			}
		}

		return res
	},
	createEmployee: async (
		email,
		fullName,
		number,
		role,
		subdivision,
		department,
		photo,
	) => {
		const formData = new FormData()
		formData.append('photo', photo)
		formData.append('email', email)
		formData.append('fullName', fullName)
		formData.append('number', number)
		formData.append('role', role)
		formData.append('subdivision', subdivision)
		formData.append('department', department)

		const { data } = await axios.post('/employee', formData)

		if (!data) {
			return
		}

		return data
	},
	updateEmployee: async (
		id,
		email,
		fullName,
		number,
		role,
		subdivision,
		department,
		photo,
	) => {
		const formData = new FormData()

		formData.append('id', id)

		if (photo) {
			formData.append('photo', photo)
		}

		if (department) {
			formData.append('department', department)
		}

		if (subdivision) {
			formData.append('subdivision', subdivision)
		}

		if (role) {
			formData.append('role', role)
		}

		if (number) {
			formData.append('number', number)
		}

		if (fullName) {
			formData.append('fullName', fullName)
		}

		if (email) {
			formData.append('email', email)
		}

		const { data } = await axios.put('/employee', formData)

		if (!data) {
			return
		}

		return data
	},
	getEmployee: async id => {
		if (!id) {
			return
		}

		const { data } = await axios.get('/employee/' + id)

		if (!data) {
			return {}
		}

		return data.employee
	},
	getEmployees: async () => {
		const { data } = await axios.get('/employees')

		if (!data) {
			return []
		}

		return data.employees
	},
}))

export { useStore }
