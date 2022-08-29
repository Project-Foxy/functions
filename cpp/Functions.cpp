#include "Functions.h"


void say(char* message...)
{
    std::cout << message << std::endl;
}

void stop() {
    std::cin.get();
}

void repeat(int times,std::function<void()> func) {
    for (int i = 0; i < times; i++)
    {
        func();
    }
}

