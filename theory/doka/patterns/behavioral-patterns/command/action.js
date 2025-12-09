
const updateUserAction = {
  type: 'UPDATE_USER',
  payload: {
    name: 'Alex',
    email: 'hi@site.com',
  },
}

function userReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state /*...*/ }
  }
}
