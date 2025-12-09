import sys

if len(sys.argv) !=2:
    print("Comand-line args error")
    sys.exit()
else:
    print(f"Hello, {sys.argv[1]}")
