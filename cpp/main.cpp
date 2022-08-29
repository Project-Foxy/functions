#include <iostream>
#include "Functions.h"

int main()
{
    repeat(10, []() {
    
        say("hello");
    
    });
    
    stop();
    

    return 0;
}