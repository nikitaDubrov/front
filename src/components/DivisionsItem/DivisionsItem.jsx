import { Link } from 'react-router-dom'
import classes from './DivisionsItem.module.scss'

const DivisionsItem = ({ name, id }) => {
	return (
		<div className={classes.wrapper}>
			<p className={classes.text}>{name}</p>

			<Link to={'/book/' + id}>
				<span>Перейти</span>
			</Link>
		</div>
	)
}

export default DivisionsItem
