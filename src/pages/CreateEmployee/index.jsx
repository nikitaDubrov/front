import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveInput from '../../components/ActiveInput/ActiveInput'
import DropDownList from '../../components/DropDownList/DropDownList'
import Loader from '../../components/Loader/Loader'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import SucceedCard from '../../components/SucceedCard/SucceedCard'
import Title from '../../components/Title/Title'
import { useStore } from '../../store'
import { departments, roles } from '../../store/config'
import classes from './index.module.scss'

const CreateEmployee = () => {
	const createEmployee = useStore(state => state.createEmployee)

	const [divisions, setDivisions] = useState([])

	const getDivisions = useStore(state => state.getDivisions)

	const [form, setForm] = useState({
		fullName: '',
		position: '',
		department: '',
		subdivision: '',
		email: '',
		number: '',
		file: '',
	})

	const [error, setError] = useState(false)

	const [succeed, setSucceed] = useState(false)

	const [loading, setLodaing] = useState(false)

	function numberHandler(e) {
		setForm(p => ({ ...p, number: e.target.value.replace(/[^0-9]/g, '') }))
	}

	function subdivisionHandler(s) {
		setForm(p => ({
			...p,
			subdivision: s,
		}))
	}

	function departmentHandler(s) {
		setForm(p => ({
			...p,
			department: s,
		}))
	}

	function emailHandler(e) {
		setForm(p => ({ ...p, email: e.target.value }))
	}

	function fullNameHandler(e) {
		setForm(p => ({ ...p, fullName: e.target.value }))
	}

	function fileHandler(e) {
		setForm(p => ({ ...p, file: e.target.files[0] }))
	}

	function positionHandler(s) {
		setForm(p => ({ ...p, position: s }))
	}

	async function submitHandler(e) {
		e.preventDefault()
		setLodaing(true)

		const reqexp =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		console.log(form)
		const isCorrect =
			!form.fullName ||
			!form.position ||
			!reqexp.test(form.email) ||
			!form.number ||
			!form.subdivision ||
			!form.department ||
			!form.file

		if (isCorrect) {
			setError(true)
			setLodaing(false)
			return
		}

		const res = await createEmployee(
			form.email,
			form.fullName,
			form.number,
			form.position,
			form.subdivision,
			form.department,
			form.file,
		)

		if (!res) {
			setSucceed(false)
			setError(true)
			setLodaing(false)
			return
		}

		setSucceed(true)
		setError(false)
		setLodaing(false)
		setForm({
			fullName: '',
			position: '',
			department: '',
			subdivision: '',
			email: '',
			number: '',
			file: '',
		})
	}

	useEffect(() => {
		const fetchDivisions = async () => {
			const res = await getDivisions()
			setDivisions(res)
		}

		fetchDivisions()
	}, [])

	return (
		<div className={classes.wrapper}>
			{loading && <Loader />}
			{succeed && (
				<div className={classes.wrapper_succeed}>
					<SucceedCard>Сотрудник сохранен</SucceedCard>
				</div>
			)}
			<Title>Создание</Title>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.item}>
					<span>ФИО</span>
					<ActiveInput
						onChange={fullNameHandler}
						value={form.fullName}
						type="text"
						placeholder={'Шутов Вадим Николаевич'}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Должность</span>
					<DropDownList
						value={form.position}
						arr={roles}
						onSelected={positionHandler}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Подразделение</span>

					<DropDownList
						value={form.subdivision}
						arr={divisions}
						onSelected={subdivisionHandler}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Отдел</span>
					<DropDownList
						value={form.department}
						arr={departments}
						onSelected={departmentHandler}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Телефон</span>
					<ActiveInput
						onChange={numberHandler}
						value={form.number}
						type="tel"
						placeholder={'+73462206940'}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Электронная почта</span>
					<ActiveInput
						onChange={emailHandler}
						value={form.email}
						type="text"
						placeholder={'shutov@surpk.ru'}
						required
					/>
				</div>
				<div className={classes.item}>
					<span>Фотография</span>
					<label className={classes.file}>
						<p>{!form.file ? 'Файл не выбран' : form.file.name}</p>
						<ActiveInput
							onChange={fileHandler}
							type="file"
							required
							accept="image/*"
						/>
					</label>
				</div>
				{error && (
					<div className={classes.error}>
						<span>Некорректные данные</span>
					</div>
				)}

				<Link to="/">
					<span>Назад</span>
				</Link>

				<SecondaryButton onClick={submitHandler} type="submit">
					Сохранить
				</SecondaryButton>
			</form>
		</div>
	)
}

export default CreateEmployee
