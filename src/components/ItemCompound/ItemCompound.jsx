import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import classes from './ItemCompound.module.scss'

const ItemCompound = ({ fullName, role, number, email, id }) => {
	const isActive = useStore(state => state.auth)

	return (
		<div className={classes.wrapper}>
			<div>
				<p className={classes.fullName}>{fullName}</p>
				<p className={classes.role}>{role}</p>
			</div>
			<div>
				<p className={classes.number}>
					<svg
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.6186 1.59332C4.771 0.745732 3.36231 0.824133 2.7397 1.84843C1.82998 3.34508 1 5.22998 1 7.11669C1 9.40604 2.44106 10.8503 3.93035 12.343C4.16851 12.5817 4.40794 12.8216 4.64287 13.0665C4.81755 13.2485 4.99073 13.4323 5.16361 13.6157C6.77084 15.3214 8.35259 17 10.8833 17C12.9727 17 14.9106 16.3516 16.507 15.2452C17.403 14.6241 17.3825 13.3572 16.6116 12.5863L15.2616 11.2363C14.5107 10.4855 13.2934 10.4855 12.5426 11.2363V11.2363C11.7917 11.9871 10.5744 11.9871 9.82357 11.2363L7.30115 8.71386C6.55032 7.96303 6.55032 6.74569 7.30115 5.99487V5.99487C8.05197 5.24404 8.05197 4.0267 7.30115 3.27587L5.6186 1.59332Z"
							stroke="#F2650C"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
					</svg>
					{number}
				</p>
			</div>
			<div>
				<p className={classes.email}>
					<svg
						width="18"
						height="14"
						viewBox="0 0 18 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M2 2.63393V2H16V2.63393C15.9815 2.64462 15.9633 2.65595 15.9453 2.66795L9 7.29815L2.0547 2.66795C2.0367 2.65595 2.01846 2.64462 2 2.63393ZM2 5.03518V12H16V5.03518L9.5547 9.33205C9.2188 9.55598 8.7812 9.55598 8.4453 9.33205L2 5.03518ZM0 1C0 0.447716 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V13C18 13.5523 17.5523 14 17 14H1C0.447716 14 0 13.5523 0 13V1Z"
							fill="#F2650C"
						/>
					</svg>
					{email}
				</p>
			</div>

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
	)
}

export default ItemCompound
