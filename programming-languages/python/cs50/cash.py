
counter = 0

try:
    amount = int(input("Amount: "))
except:
    print("Invalid")

while(amount >= 50):
    amount -= 50
    counter += 1

while(amount >= 20):
    amount -= 20
    counter += 1

while(amount >= 10):
    amount -= 10
    counter += 1

while(amount >= 5):
    amount -= 5
    counter += 1

while(amount >= 2):
    amount -= 2
    counter += 1

while(amount >= 1):
    amount -= 1
    counter += 1

print(f"Count: {counter}")
