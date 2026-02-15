#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int sqroot(int y);

int main()
{

}

int sum(int x)
{
    if (x > 0) {
        return x + sum(x - 1);
    }
    else {
        return 0;
    }
}
