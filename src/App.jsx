import { Route, Routes } from 'react-router'
import Book from './pages/Book'
import ChangeEmployee from './pages/ChangeEmployee'
import CreateEmployee from './pages/CreateEmployee'
import Employee from './pages/Employee'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { useStore } from './store'

const App = () => {
	const isAuth = useStore(state => state.auth)

	return (
		<div>
			{isAuth ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
					<Route path="/book/:id" element={<Book />} />
					<Route path="/employee/change/:id" element={<ChangeEmployee />} />
					<Route path="/employee/create" element={<CreateEmployee />} />
					<Route path="/employee/:id" element={<Employee />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
					<Route path="/book/:id" element={<Book />} />
					<Route path="/employee/:id" element={<Employee />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			)}
		</div>
	)
}

export default App
