import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { url } from '../../axios'
import BookCompound from '../../components/BookCompound/BookCompound'
import DropDownList from '../../components/DropDownList/DropDownList'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'
import NavBar from '../../components/NavBar/NavBar'
import Title from '../../components/Title/Title'
import { useStore } from '../../store'
import { templateDepartments } from '../../store/config'
import classes from './index.module.scss'

const Book = () => {
	const isAuth = useStore(state => state.auth)

	const getEmployees = useStore(state => state.getEmployees)
	const getDivisions = useStore(state => state.getDivisions)
	const getExcel = useStore(state => state.getExcel)

	const [employees, setEmployees] = useState([])
	const [loading, setLoading] = useState(true)
	const [divisions, setDivisions] = useState([])
	const [selected, setSelected] = useState(null)

	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			const employees = await getEmployees()

			setEmployees(employees)

			const divisions = await getDivisions()

			for (const d of divisions) {
				if (d._id === id) {
					setSelected(d.name)
				}
			}

			setDivisions(divisions)
			setLoading(false)
		}
		fetchData()
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			{loading && <Loader />}
			<NavBar />
			<div className={classes.wrapper}>
				<div className="container">
					<Title>
						телефонный справочник сургутского политехнического колледжа
					</Title>

					<div className={classes.navigate}>
						<DropDownList
							arr={divisions}
							value={selected || 'Выбрать'}
							onSelected={setSelected}
						/>

						<div className={classes.btns}>
							{isAuth && <Link to={'/employee/create'}>Создать</Link>}

							<a href={url + '/excel'} download>
								Скачать
							</a>
						</div>
					</div>

					<div className={classes.compound}>
						<h3>состав кадров</h3>
						<BookCompound
							title={templateDepartments.management}
							employees={employees.filter(
								e =>
									e.subdivision === selected &&
									e.department === templateDepartments.management,
							)}
						/>
						<BookCompound
							title={templateDepartments.legalDepartment}
							employees={employees.filter(
								e =>
									e.subdivision === selected &&
									e.department === templateDepartments.legalDepartment,
							)}
						/>
						<BookCompound
							title={templateDepartments.humanResourcesDepartment}
							employees={employees.filter(
								e =>
									e.subdivision === selected &&
									e.department === templateDepartments.humanResourcesDepartment,
							)}
						/>
						<BookCompound
							title={templateDepartments.economicDepartment}
							employees={employees.filter(
								e =>
									e.subdivision === selected &&
									e.department === templateDepartments.economicDepartment,
							)}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Book
