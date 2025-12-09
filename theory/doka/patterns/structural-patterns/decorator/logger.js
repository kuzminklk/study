
const user = {
  name: 'Александр',
  email: 'example@site.com',
}

function update(name, email) {
  user.name = name
  user.email = email
}


function loggingDecorator(fn) {
  return function wrapped(...args) {
    console.log(`Логирую... ${args.join(',')}`)
    return fn(...args)
  }
}


const updateWithLogging = loggingDecorator(update)
updateWithLogging('Мария', 'test@test.com')

// Логирую... Мария, test@test.com

console.log(user)
// {name: 'Мария', email: 'test@test.com'}
