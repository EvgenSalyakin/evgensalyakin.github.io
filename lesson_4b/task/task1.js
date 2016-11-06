'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
         parameters: [1],
         expectedResult: 1
     },
     {
        parameters: [3],
        expectedResult: 4
     },
     {
         parameters: [5],
         expectedResult: 12
     },
     {
         parameters: [20],
         expectedResult: 17710
     },
     {
         parameters: [0],
         expectedResult: 0
    }
];

function fib(number) {
    if (number==0) return 0;
    if (number==1) return 1;
    var el1=1, el2=0;
    for (var i = 2; i < number; i++) {
        var tmp = el2;
        el2 = el1;
        el1 += tmp;
    }
    return el1+el2;
}

function fibonacci(n) {
    var rez = 0;
    var z=0;
    for (var i=0;i<=n;i++) {
        z = fib(i);
        rez += z;;
    }
    return rez;
}

tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});