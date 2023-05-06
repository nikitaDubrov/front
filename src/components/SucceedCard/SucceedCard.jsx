import classes from './SucceedCard.module.scss'

const SucceedCard = ({ children }) => {
	return <div className={classes.wrapper}>{children}</div>
}

export default SucceedCard
