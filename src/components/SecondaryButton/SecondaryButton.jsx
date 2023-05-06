import classes from './SecondaryButton.module.scss'

const SecondaryButton = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	)
}

export default SecondaryButton
