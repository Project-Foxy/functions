#pragma once
#include <iostream>

#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

void say(char* message...);

void stop();

void repeat(int times, std::function<void()> func);

void forever(std::function<void()> func, int fps = 60);
