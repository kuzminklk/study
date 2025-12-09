people = {
    "Sam": "+375-29-111-2222",
    "Don": "+375-29-111-3333",
    "Alex": "+375-29-111-4444",
}

name = input("Name: ")

if name in people:
    number = people[name]
    print(f"Found: {number}")
else:
    print("Not found")
