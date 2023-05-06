import classes from './TitleDepartments.module.scss'

const TitleDepartments = ({ children }) => {
	return (
		<div className={classes.wrapper}>
			<h4>{children}</h4>
		</div>
	)
}

export default TitleDepartments
