#include <iostream>
#include "Functions.h"


int main()
{
    forever([]() {
    
        say("hello");
        
    });

    stop();

    return 0;
}