import classes from './Modal.module.scss'

const Modal = ({ children, setVisible = () => {}, ...props }) => {
	return (
		<div onClick={() => setVisible(false)} className={classes.wrapper}>
			<div
				onClick={e => e.stopPropagation()}
				className={classes.modal}
				{...props}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
