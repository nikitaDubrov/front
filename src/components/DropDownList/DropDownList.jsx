import { useState } from 'react'
import classes from './DropDownList.module.scss'

const DropDownList = ({ arr, onSelected, defaultValue, ...props }) => {
	const [selected, setSelected] = useState('')

	function select(option) {
		setSelected(option)
		onSelected(option)
	}

	return (
		<select
			className={classes.wrapper}
			defaultValue={defaultValue}
			onChange={e => select(e.target.value)}
			{...props}
		>
			<option value="">{defaultValue || 'Выбрать'}</option>

			{arr.map(option =>
				selected === option.name ? (
					<option key={option.name} value={option.name} selected>
						{option.name}
					</option>
				) : (
					<option key={option.name} value={option.name}>
						{option.name}
					</option>
				),
			)}
		</select>
	)
}

export default DropDownList
