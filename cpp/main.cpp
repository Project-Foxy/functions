#include <iostream>
#include "Functions.h"

int main()
{
    int i = 0;
    repeat(10, [=]() {
        
        say("Times repeat: ");
        say(i);
        say("hello");
        
    });
    
    stop();
    

    return 0;
}