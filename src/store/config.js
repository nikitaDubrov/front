const templateDepartments = {
	management: 'Руководство',
	humanResourcesDepartment: 'Отдел кадров',
	legalDepartment: 'Юридический отдел',
	economicDepartment: 'Экономический отдел',
}

const departments = [
	{
		name: templateDepartments.management,
	},
	{
		name: templateDepartments.humanResourcesDepartment,
	},
	{
		name: templateDepartments.legalDepartment,
	},
	{
		name: templateDepartments.economicDepartment,
	},
]

const templateRoles = {
	director: 'Директор',
	deputyDirector: 'Заместитель директора',
	mathTeacher: 'Преподаватель по математике',
	webDevelopmentInstructor: 'Преподаватель по веб-разработке',
}

const roles = [
	{
		name: templateRoles.director,
	},
	{
		name: templateRoles.deputyDirector,
	},
	{
		name: templateRoles.mathTeacher,
	},
	{
		name: templateRoles.webDevelopmentInstructor,
	},
]

export { departments, templateRoles, roles, templateDepartments }
