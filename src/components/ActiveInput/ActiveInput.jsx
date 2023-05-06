import classes from './ActiveInput.module.scss'

const ActiveInput = props => {
	return <input className={classes.input} {...props} />
}

export default ActiveInput
