import classes from './Title.module.scss'

const Title = ({ children, ...props }) => {
	return (
		<h1 className={classes.title} {...props}>
			{children}
		</h1>
	)
}

export default Title
