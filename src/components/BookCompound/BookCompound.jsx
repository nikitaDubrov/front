import { formatPhoneNumber } from '../../utils/formatPhoneNumber'
import ItemCompound from '../ItemCompound/ItemCompound'
import TitleDepartments from '../TitleDepartments/TitleDepartments'
import classes from './BookCompound.module.scss'

const BookCompound = ({ title, employees }) => {
	return (
		<div className={classes.wrapper}>
			<TitleDepartments>{title}</TitleDepartments>

			{employees.length === 0 ? (
				<p className={classes.error}>Сотрудники не найдены</p>
			) : (
				<div className={classes.employees}>
					{employees.map(e => (
						<ItemCompound
							key={e._id}
							email={e.email}
							fullName={e.fullName}
							id={e._id}
							number={formatPhoneNumber(e.number)}
							role={e.role}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default BookCompound
