function greeter(person) {
    return "Hello ".concat(person.firstname);
}
var user = { firstname: 'Jane', lastname: "Doe" };
document.body.textContent = greeter(user);
