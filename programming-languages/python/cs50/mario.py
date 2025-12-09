
import sys

if len(sys.argv) != 2:
    sys.exit()

try:
    for j in range(int(sys.argv[1])+1):
        for i in range(j):
            print("#", end="")
        print()
except:
    print("Error")
