
def main():
    while (1):
        try:
            n = int(input("How much? "))
            break
        except ValueError:
            print("Enter an number")

    meow(n)

def meow(n):
    for _ in range(n):
        print("Meow")

main()
