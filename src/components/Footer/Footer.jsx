import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import classes from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={classes.wrapper}>
			<div className="container">
				<div className={classes.footer}>
					<div className={classes.wrapper_logo}>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<a
						className={classes.link}
						target="_blank"
						href="https://www.surpk.ru/"
					>
						Официальный портал СПК
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
