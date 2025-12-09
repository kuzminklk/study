
class Numbers():
    def __init__(self):
        self.i = 0
    def __iter__(self):
        return self
    def __next__(self):
        self.i += 1
        if self.i > 13:
            raise StopIteration
        return self.i

a = Numbers()

for x in a:
    print(x)
