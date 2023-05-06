import classes from './Spinner.module.scss'

const Spinner = () => {
	return (
		<svg
			className={classes.spinner}
			width="27"
			height="27"
			viewBox="0 0 27 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.5 1C11.0277 1 8.61099 1.73311 6.55538 3.10663C4.49976 4.48015 2.89761 6.43238 1.95151 8.71646C1.00542 11.0005 0.757874 13.5139 1.24019 15.9386C1.7225 18.3634 2.91301 20.5907 4.66117 22.3388C6.40933 24.087 8.63661 25.2775 11.0614 25.7598C13.4861 26.2421 15.9995 25.9946 18.2835 25.0485C20.5676 24.1024 22.5199 22.5002 23.8934 20.4446C25.2669 18.389 26 15.9723 26 13.5"
				stroke="#22539C"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Spinner
