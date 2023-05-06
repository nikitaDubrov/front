import classes from './ActiveButton.module.scss'

const ActiveButton = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	)
}

export default ActiveButton
