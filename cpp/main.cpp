#include <iostream>
#include "Functions.h"


int main()
{
    int i = 0;
    repeat(10, [=]() mutable
    {
        i++;

        say("\n\nhello\n\n");
        say("Times repeat: ");
        say(i);

    });

    stop();

    return 0;
}