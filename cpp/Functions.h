#pragma once
#include <iostream>
#include <functional>
#include <unistd.h>


void say(char* message...);

void stop();

void repeat(int times, std::function<void()> func);

void forever(std::function<void()> func, int fps = 60);
