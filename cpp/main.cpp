#include <iostream>
#include "Functions.h"
#include <unistd.h>

int main()
{
    forever([]() {
    
        say("hello");
        
    });

    stop();

    return 0;
}