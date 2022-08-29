#pragma once
#include <iostream>
#include <functional>

void say(char* message...);

void stop();

void repeat(int times, std::function<void()> func);
