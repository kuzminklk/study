
/*  Основные понятия ООП: классы и экземпляры классов.
    Класс можно воспринимать как чертёж,
    по которому создаются объекты.
    Экземпляр класса — это созданный по чертежу объект. */

/*  Класс User описывает, какие поля (name, admin)
    и методы (isAdmin, nameOf) будет содержать созданный
    по этому классу объект. */

class User {
  constructor(name) {
    this.name = name
    this.admin = false
  }

  isAdmin() {
      return this.admin
  }

  nameOf() {
      return this.name
  }
}

/*  Объекты создаются с помощью new.
    Свежесозданный объект содержит всё,
    что было описано в классе User. */

const user = new User('Alex')
console.log(user.isAdmin())
// false
console.log(user.nameOf())
// 'Alex'

/*  Плюс классов в том, что они позволяют
    единожды описать все одинаковые поля и методы,
    которые должны быть у однотипных объектов. */

const anotherUser = new User('Alice')
console.log(anotherUser.isAdmin())
// false
console.log(anotherUser.nameOf())
// 'Alice'
