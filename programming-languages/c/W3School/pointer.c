#include <stdio.h>
#include <stdlib.h>

int main()
{
printf("Enter a number: ");
int n;
scanf("%d",&n);

printf("Number is: %i\n", n);
printf("Number pointer is: %d\n", &n);

int* ptr = &n;

printf("\nPart two\n\n");

printf("Number pointer is: %d\n", ptr);
printf("Number is: %i\n", *ptr);
}
