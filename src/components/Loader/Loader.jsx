import Modal from '../Modal/Modal'
import Spinner from '../Spinner/Spinner'
import classes from './Loader.module.scss'

const Loader = () => {
	return (
		<Modal>
			<div className={classes.wrapper}>
				<Spinner />
			</div>
		</Modal>
	)
}

export default Loader
