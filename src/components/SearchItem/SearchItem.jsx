import { Link } from 'react-router-dom'
import classes from './SearchItem.module.scss'

const SearchItem = ({ fullName, role, id, ...props }) => {
	return (
		<Link to={'/employee/' + id} className={classes.wrapper} {...props}>
			<p>{fullName}</p>
			<span>{role}</span>
		</Link>
	)
}

export default SearchItem
