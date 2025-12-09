
const original = {
  name: 'Мария',
  email: 'hi@site.com',
}

const proxied = new Proxy(original, {
  get: function (target, prop, receiver) {
    if (prop === 'name') return 'МАРИЯ'
    return 'YOU HAVE BEEN PWND!'
  },
})
