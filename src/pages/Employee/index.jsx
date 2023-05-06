import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { url } from '../../axios'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'
import NavBar from '../../components/NavBar/NavBar'
import { useStore } from '../../store'
import { formatPhoneNumber } from '../../utils/formatPhoneNumber'
import classes from './index.module.scss'

const Employee = () => {
	const [employee, setEmployee] = useState({})
	const getEmployee = useStore(state => state.getEmployee)
	const isActive = useStore(state => state.auth)
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			const data = await getEmployee(id)
			setEmployee(data)
		}

		fetchData()
	}, [id])
	return (
		<>
			<NavBar />

			{!employee._id ? (
				<Loader />
			) : (
				<div className={classes.wrapper}>
					<div className="container">
						<div className={classes.employee}>
							<div className={classes.wrapper_left}>
								<img src={url + '/image/' + employee.photo} alt="employee" />
							</div>
							<div className={classes.wrapper_right}>
								<p className={classes.fullName}>{employee.fullName}</p>
								<p className={classes.role}>Должность: {employee.role}</p>
								<p className={classes.subdivision}>
									Подразделение: {employee.subdivision}
								</p>
								<p className={classes.department}>
									Отдел: {employee.department}
								</p>
								<p className={classes.email}>Почта: {employee.email}</p>
								<p className={classes.number}>
									Номер телефона: {formatPhoneNumber(employee.number)}
								</p>
								{isActive && (
									<Link to={'/employee/change/' + id}>
										<svg
											width="20"
											height="19"
											viewBox="0 0 27 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.1139 5.23858L21.1486 11.2733L22.5628 9.85906L16.5281 3.82437L15.1139 5.23858ZM25.116 6.47427C25.0476 7.42035 24.6444 8.10622 24.518 8.29895L10.6066 22.2104L1.45439 24.7305L3.97457 15.5783L17.886 1.66691C18.0787 1.54055 18.7646 1.13735 19.7107 1.06891C20.6562 1.0005 21.9798 1.25534 23.4547 2.73024C24.9296 4.20514 25.1844 5.52872 25.116 6.47427Z"
												stroke="#EAEAEA"
												strokeWidth="2"
											/>
										</svg>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</>
	)
}

export default Employee
