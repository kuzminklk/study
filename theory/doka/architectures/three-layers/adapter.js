
// Адаптер к сервису получения данных (браузерному fetch):
function fetchUser(id) {
  return fetch(`/users/${id}`)
}

// Адаптер данных пользователя, приводит названия полей в нужный вид:
function fromResponse(serverUser) {
  const { Name, Email } = serverUser
  return { name: Name, email: Email }
}