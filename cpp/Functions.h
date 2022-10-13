#pragma once

#ifndef FUNCTIONS_H 
#define FUNCTIONS_H

#include <iostream>
#include <functional>

#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

void say(char* const message);

void say(int const message);

void say(double const message);


void stop();

void repeat(int times, std::function<void()> func);

void forever(std::function<void()> func, int fps = 60);


#endif