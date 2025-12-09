
text = input("Text: ")

sentences = 0
words = 0
chars = len(text)

avgchrw = 0
avgwrds = 0

for i in range(chars):
    if text[i] == " ":
        words += 1
        avgchrw = i / words
    if text[i] == "." or text[i] == "!" or text[i] == "?":
        sentences += 1
        avgwrds = words / sentences

index = (0.0588 * avgchrw * 100) - (0.296 * sentences/words * 100) - 15.8
print(f"Index is: {index}")
