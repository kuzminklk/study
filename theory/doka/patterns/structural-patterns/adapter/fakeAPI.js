
function fakeAPI() {
  return {
    entries: [
      {
        user_name: 'Александр',
        email_address: 'some@site.com',
        ID: 'уникальный id',
      },
      {
        user_name: 'Мария',
        email_address: 'some@other-site.com',
        ID: 'другой уникальный id',
      },
    ],
  }
}


function responseToWantedAdapter(response) {
  return response.entries.map((entry) => ({
    userName: entry.user_name,
    email: entry.email_address,
    id: entry.ID,
  }))
}


const response = fakeAPI()
const compatibleResponse = responseToWantedAdapter(response)
