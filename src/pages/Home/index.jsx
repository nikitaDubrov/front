import { useEffect, useState } from 'react'
import { url } from '../../axios'
import DivisionsItem from '../../components/DivisionsItem/DivisionsItem'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List'
import ManagementCard from '../../components/ManagementCard/ManagementCard'
import NavBar from '../../components/NavBar/NavBar'
import Spinner from '../../components/Spinner/Spinner'
import Title from '../../components/Title/Title'
import { useStore } from '../../store'
import classes from './index.module.scss'

const Home = () => {
	const [managements, setManagements] = useState([])
	const [divisions, setDivisions] = useState([])

	const getDivisions = useStore(state => state.getDivisions)
	const getManagements = useStore(state => state.getManagements)

	useEffect(() => {
		const fetchData = async () => {
			const divisions = await getDivisions()

			if (!divisions) {
				return
			}

			setDivisions(divisions)

			const managements = await getManagements()

			if (!managements) {
				return
			}

			setManagements(managements)
		}

		fetchData()
	}, [])

	return (
		<>
			<NavBar />
			<div className={classes.wrapper}>
				<div className="container">
					<div className={classes.wrapper_management}>
						<Title>Руководство</Title>
						<div className={classes.management}>
							{managements.length === 0 ? (
								<div className={classes.wrapper_spinner}>
									<Spinner />
								</div>
							) : (
								<List
									arr={managements}
									callback={management => (
										<ManagementCard
											id={management._id}
											role={management.role}
											key={management._id}
											number={management.number}
											email={management.email}
											fullName={management.fullName}
											img={url + '/image/' + management.photo}
										/>
									)}
								/>
							)}
						</div>
					</div>
					<div className={classes.wrapper_books}>
						<Title>Телефонные книжки структурных подразделений</Title>
						<div className={classes.books}>
							{divisions.length === 0 ? (
								<div className={classes.wrapper_spinner}>
									<Spinner />
								</div>
							) : (
								<List
									arr={divisions}
									callback={division => (
										<DivisionsItem
											key={division._id}
											name={division.name}
											id={division._id}
										/>
									)}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home
