export function formatPhoneNumber(phoneNumber) {
	// Удаляем все символы, кроме цифр
	const cleaned = ('' + phoneNumber).replace(/\D/g, '')

	// Разбиваем номер на части
	const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

	// Если номер не соответствует формату, возвращаем исходную строку
	if (!match) {
		return phoneNumber
	}

	// Собираем номер в нужном формате
	const formatted =
		'+7 (' + match[2] + ') ' + match[3] + ' ' + match[4] + '-' + match[5]

	return formatted
}
