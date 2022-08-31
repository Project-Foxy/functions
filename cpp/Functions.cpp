#include "Functions.h"

void say(const char* message)
{
    std::cout << message << std::endl;
}

void say(int message)
{
    std::cout << message << std::endl;
}

void say(double message)
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
