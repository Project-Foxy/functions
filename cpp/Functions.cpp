#include "Functions.h"

void say(char* const message)
{
    std::cout << message << std::endl;
}


void say(int const message)
{
    std::cout << message << std::endl;
}

void say(double const message)
{
    std::cout << message << std::endl;
}

void stop() {
    std::cin.get();
}

void repeat(int times, std::function<void()> func) {
    for (int i = 0; i < times; i++)
    {
        func();
    }
}

void repeat(int times, std::function<void(int)> func) {
    for (int i = 0; i < times; i++)
    {
        func(i);
    }
}
