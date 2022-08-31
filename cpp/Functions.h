#pragma once
#include <iostream>
#include <functional>

void say(const char* message);

void say(int message);

void say(double message);

void stop();

void repeat(int times, std::function<void()> func);

void repeat(int times, std::function<void(int)> func);

