
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return f"Name: {self.name} \nAge: {self.age}"

class Student(Person):
    pass


p1 = Person("Alex", 25)

p2 = Student("Don", 19)


print(p1)
print()
print(p2)
