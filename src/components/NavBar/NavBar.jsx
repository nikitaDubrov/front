import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useStore } from '../../store/index'
import ActiveButton from '../ActiveButton/ActiveButton'
import SearchItem from '../SearchItem/SearchItem'
import SecondaryInput from '../SecondaryInput/SecondaryInput'
import Spinner from '../Spinner/Spinner'
import classes from './NavBar.module.scss'

const NavBar = () => {
	const label = useRef(null)

	const [visible, setVisible] = useState(false)
	const [search, setSearch] = useState('')
	const isAuth = useStore(state => state.auth)
	const logout = useStore(state => state.logout)
	const getEmployees = useStore(state => state.getEmployees)

	const [employee, setEmployee] = useState([])
	const [filterEmployee, setFilterEmployee] = useState([])

	function newfilterEmployee() {
		const arr = employee.filter(e => e.fullName.includes(search.trim() || null))

		setFilterEmployee(arr)
	}

	useEffect(() => {
		newfilterEmployee()
	}, [employee, search])

	useEffect(() => {
		const fetchData = async () => {
			const data = await getEmployees()
			setEmployee(data)
		}

		fetchData()
	}, [])
	return (
		<div className={classes.wrapper}>
			<div className="container">
				<nav className={classes.navbar}>
					<Link to="/">
						<img className={classes.logo} src={logo} alt="logo" />
					</Link>

					<div className={classes.wrapper_search}>
						<label ref={label}>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8ZM18 8C18 12.4183 14.4183 16 10 16C8.15129 16 6.44904 15.3729 5.09436 14.3199L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L3.68014 12.9056C2.62708 11.551 2 9.84871 2 8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8Z"
									fill="#999999"
								/>
							</svg>
							<SecondaryInput
								onChange={e => setSearch(e.target.value)}
								value={search}
								placeholder="Поиск"
							/>
						</label>
						{filterEmployee.length !== 0 && search !== '' && (
							<div className={classes.wrapper_filter_list}>
								{employee.length === 0 && <Spinner />}
								{filterEmployee.map(e => (
									<SearchItem
										key={e._id}
										id={e._id}
										fullName={e.fullName}
										role={e.role}
									/>
								))}
							</div>
						)}
					</div>

					<div className={classes.contact}>
						<svg
							width="19"
							height="18"
							viewBox="0 0 19 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.6186 1.59332C4.771 0.745732 3.36231 0.824133 2.7397 1.84843C1.82998 3.34508 1 5.22998 1 7.11669C1 9.40604 2.44106 10.8503 3.93035 12.343C4.16851 12.5817 4.40794 12.8216 4.64287 13.0665C4.81755 13.2485 4.99073 13.4323 5.16361 13.6157C6.77084 15.3214 8.35259 17 10.8833 17C12.9727 17 14.9106 16.3516 16.507 15.2452C17.403 14.6241 17.3825 13.3572 16.6116 12.5863L15.2616 11.2363C14.5107 10.4855 13.2934 10.4855 12.5426 11.2363V11.2363C11.7917 11.9871 10.5744 11.9871 9.82357 11.2363L7.30115 8.71386C6.55032 7.96303 6.55032 6.74569 7.30115 5.99487V5.99487C8.05197 5.24404 8.05197 4.0267 7.30115 3.27587L5.6186 1.59332Z"
								stroke="white"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
						</svg>
						+7 (3462) 206-940
					</div>
					<div className={classes.contact}>
						<svg
							width="12"
							height="19"
							viewBox="0 0 12 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 6.33333C2 3.70376 3.85715 2 6 2C8.14285 2 10 3.70376 10 6.33333C10 6.68773 9.87295 7.32872 9.537 8.26353C9.21546 9.15824 8.75813 10.1732 8.23167 11.22C7.51439 12.6464 6.70039 14.0699 6 15.2372C5.29961 14.0699 4.48561 12.6464 3.76833 11.22C3.24187 10.1732 2.78454 9.15824 2.463 8.26353C2.12705 7.32872 2 6.68773 2 6.33333ZM6 0C2.68629 0 0 2.66667 0 6.33333C0 9.1552 3.5537 15.1359 5.19125 17.742C5.5709 18.3462 6.4291 18.3462 6.80875 17.742C8.4463 15.1359 12 9.1552 12 6.33333C12 2.66667 9.31371 0 6 0ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
								fill="#EAEAEA"
							/>
						</svg>
						ул. Маяковского, 41
					</div>
					{!isAuth ? (
						<div className={classes.wrapper_btn_login}>
							<Link to="/login">
								Вход
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.817 5.15156C11.817 6.83316 10.3921 8.30313 8.5005 8.30313C6.60893 8.30313 5.18396 6.83316 5.18396 5.15156C5.18396 3.46996 6.60893 2 8.5005 2C10.3921 2 11.817 3.46996 11.817 5.15156ZM13.817 5.15156C13.817 7.99669 11.4368 10.3031 8.5005 10.3031C5.56426 10.3031 3.18396 7.99669 3.18396 5.15156C3.18396 2.30643 5.56426 0 8.5005 0C11.4368 0 13.817 2.30643 13.817 5.15156ZM3.22602 10.5903C3.36298 10.4883 3.52692 10.4259 3.69754 10.4192C4.26385 10.3968 4.54462 10.5232 4.76102 10.7652C5.15591 11.2067 4.90136 11.9296 4.43259 12.2917C3.53663 12.9838 2.84404 13.8981 2.44606 14.9394H14.5539C14.156 13.8984 13.4637 12.9843 12.568 12.2922C12.0992 11.93 11.8448 11.2069 12.2398 10.7653C12.4562 10.5233 12.7369 10.3969 13.3032 10.4195C13.4737 10.4263 13.6375 10.4887 13.7744 10.5906C15.507 11.8808 16.7032 13.7921 16.9923 15.9719C17.0672 16.5363 16.5839 17 15.9967 17H1.00331C0.416063 17 -0.0671788 16.5363 0.00767206 15.9719C0.296795 13.7919 1.49321 11.8805 3.22602 10.5903Z"
										fill="#F2F2F2"
									/>
								</svg>
							</Link>
						</div>
					) : (
						<ActiveButton
							onClick={() => {
								logout()
							}}
						>
							Выход
						</ActiveButton>
					)}
				</nav>

				<nav className={classes.navbar_mobile}>
					<div className={classes.wrapper_btn_open}>
						<Link to="/">
							<img className={classes.logo} src={logo} alt="logo" />
						</Link>

						<button
							onClick={() => {
								setVisible(p => !p)
							}}
						>
							{visible ? (
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.730285 0.730285C1.1605 0.300603 1.74368 0.0592544 2.35172 0.0592544C2.95976 0.0592544 3.54294 0.300603 3.97315 0.730285L10 6.75713L16.0268 0.730285C16.2369 0.504854 16.4902 0.324041 16.7717 0.198633C17.0531 0.0732262 17.357 0.00579282 17.665 0.000357082C17.9731 -0.00507866 18.2791 0.0515947 18.5648 0.166995C18.8505 0.282395 19.1101 0.454161 19.328 0.672041C19.5458 0.889922 19.7176 1.14945 19.833 1.43516C19.9484 1.72086 20.0051 2.02688 19.9996 2.33496C19.9942 2.64304 19.9268 2.94687 19.8014 3.22833C19.676 3.50978 19.4952 3.7631 19.2697 3.97315L13.2429 10L19.2697 16.0268C19.4952 16.2369 19.676 16.4902 19.8014 16.7717C19.9268 17.0531 19.9942 17.357 19.9996 17.665C20.0051 17.9731 19.9484 18.2791 19.833 18.5648C19.7176 18.8505 19.5458 19.1101 19.328 19.328C19.1101 19.5458 18.8505 19.7176 18.5648 19.833C18.2791 19.9484 17.9731 20.0051 17.665 19.9996C17.357 19.9942 17.0531 19.9268 16.7717 19.8014C16.4902 19.676 16.2369 19.4952 16.0268 19.2697L10 13.2429L3.97315 19.2697C3.7631 19.4952 3.50978 19.676 3.22833 19.8014C2.94687 19.9268 2.64304 19.9942 2.33496 19.9996C2.02688 20.0051 1.72086 19.9484 1.43516 19.833C1.14945 19.7176 0.889922 19.5458 0.672041 19.328C0.454161 19.1101 0.282395 18.8505 0.166995 18.5648C0.0515947 18.2791 -0.00507866 17.9731 0.000357082 17.665C0.00579282 17.357 0.0732262 17.0531 0.198633 16.7717C0.324041 16.4902 0.504854 16.2369 0.730285 16.0268L6.75713 10L0.730285 3.97315C0.300603 3.54294 0.0592544 2.95976 0.0592544 2.35172C0.0592544 1.74368 0.300603 1.1605 0.730285 0.730285Z"
										fill="white"
									/>
								</svg>
							) : (
								<svg
									width="24"
									height="20"
									viewBox="0 0 20 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1H19M1 7H19M1 13H19"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							)}
						</button>
					</div>
					{visible && (
						<>
							<div className={classes.wrapper_search}>
								<label ref={label}>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8ZM18 8C18 12.4183 14.4183 16 10 16C8.15129 16 6.44904 15.3729 5.09436 14.3199L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L3.68014 12.9056C2.62708 11.551 2 9.84871 2 8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8Z"
											fill="#999999"
										/>
									</svg>
									<SecondaryInput
										onChange={e => setSearch(e.target.value)}
										value={search}
										placeholder="Поиск"
									/>
								</label>
								{filterEmployee.length !== 0 && search !== '' && (
									<div className={classes.wrapper_filter_list}>
										{employee.length === 0 && <Spinner />}
										{filterEmployee.map(e => (
											<SearchItem
												key={e._id}
												id={e._id}
												fullName={e.fullName}
												role={e.role}
											/>
										))}
									</div>
								)}
							</div>

							<div className={classes.contact}>
								<svg
									width="19"
									height="18"
									viewBox="0 0 19 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.6186 1.59332C4.771 0.745732 3.36231 0.824133 2.7397 1.84843C1.82998 3.34508 1 5.22998 1 7.11669C1 9.40604 2.44106 10.8503 3.93035 12.343C4.16851 12.5817 4.40794 12.8216 4.64287 13.0665C4.81755 13.2485 4.99073 13.4323 5.16361 13.6157C6.77084 15.3214 8.35259 17 10.8833 17C12.9727 17 14.9106 16.3516 16.507 15.2452C17.403 14.6241 17.3825 13.3572 16.6116 12.5863L15.2616 11.2363C14.5107 10.4855 13.2934 10.4855 12.5426 11.2363V11.2363C11.7917 11.9871 10.5744 11.9871 9.82357 11.2363L7.30115 8.71386C6.55032 7.96303 6.55032 6.74569 7.30115 5.99487V5.99487C8.05197 5.24404 8.05197 4.0267 7.30115 3.27587L5.6186 1.59332Z"
										stroke="white"
										strokeWidth="2"
										strokeLinejoin="round"
									/>
								</svg>
								+7 (3462) 206-940
							</div>

							<div className={classes.contact}>
								<svg
									width="12"
									height="19"
									viewBox="0 0 12 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M2 6.33333C2 3.70376 3.85715 2 6 2C8.14285 2 10 3.70376 10 6.33333C10 6.68773 9.87295 7.32872 9.537 8.26353C9.21546 9.15824 8.75813 10.1732 8.23167 11.22C7.51439 12.6464 6.70039 14.0699 6 15.2372C5.29961 14.0699 4.48561 12.6464 3.76833 11.22C3.24187 10.1732 2.78454 9.15824 2.463 8.26353C2.12705 7.32872 2 6.68773 2 6.33333ZM6 0C2.68629 0 0 2.66667 0 6.33333C0 9.1552 3.5537 15.1359 5.19125 17.742C5.5709 18.3462 6.4291 18.3462 6.80875 17.742C8.4463 15.1359 12 9.1552 12 6.33333C12 2.66667 9.31371 0 6 0ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
										fill="#EAEAEA"
									/>
								</svg>
								ул. Маяковского, 41
							</div>

							{!isAuth ? (
								<div className={classes.wrapper_btn_login}>
									<Link to="/login">
										Вход
										<svg
											width="17"
											height="17"
											viewBox="0 0 17 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M11.817 5.15156C11.817 6.83316 10.3921 8.30313 8.5005 8.30313C6.60893 8.30313 5.18396 6.83316 5.18396 5.15156C5.18396 3.46996 6.60893 2 8.5005 2C10.3921 2 11.817 3.46996 11.817 5.15156ZM13.817 5.15156C13.817 7.99669 11.4368 10.3031 8.5005 10.3031C5.56426 10.3031 3.18396 7.99669 3.18396 5.15156C3.18396 2.30643 5.56426 0 8.5005 0C11.4368 0 13.817 2.30643 13.817 5.15156ZM3.22602 10.5903C3.36298 10.4883 3.52692 10.4259 3.69754 10.4192C4.26385 10.3968 4.54462 10.5232 4.76102 10.7652C5.15591 11.2067 4.90136 11.9296 4.43259 12.2917C3.53663 12.9838 2.84404 13.8981 2.44606 14.9394H14.5539C14.156 13.8984 13.4637 12.9843 12.568 12.2922C12.0992 11.93 11.8448 11.2069 12.2398 10.7653C12.4562 10.5233 12.7369 10.3969 13.3032 10.4195C13.4737 10.4263 13.6375 10.4887 13.7744 10.5906C15.507 11.8808 16.7032 13.7921 16.9923 15.9719C17.0672 16.5363 16.5839 17 15.9967 17H1.00331C0.416063 17 -0.0671788 16.5363 0.00767206 15.9719C0.296795 13.7919 1.49321 11.8805 3.22602 10.5903Z"
												fill="#F2F2F2"
											/>
										</svg>
									</Link>
								</div>
							) : (
								<ActiveButton
									onClick={() => {
										logout()
									}}
								>
									Выход
								</ActiveButton>
							)}
						</>
					)}
				</nav>
			</div>
		</div>
	)
}

export default NavBar
