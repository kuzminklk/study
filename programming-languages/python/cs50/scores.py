
scores = []
for i in range(3):
    while (1):
        try:
            score = int(input("Score: "))
            break
        except ValueError:
            print("Enter an number")
    scores.append(score)
average = sum(scores) / len(scores)
print(f"Average: {average}")
