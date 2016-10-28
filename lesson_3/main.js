
console.log('Factorial = ',factorial(5));
console.log('Factorial = ',factorialSimple(10));

console.log(performanceMeasurement(factorial));

console.log(performanceMeasurement(factorialSimple));

function factorial(n) {
    if (n==0) return 1;
    return n * factorial(n-1);
}

function factorialSimple(n) {
    var rez = 1;
    for (var i = 1; i <= n; ++i) rez *= i;
    return rez;
}

function performanceMeasurement(func) {
    var timeStampStart = Date.now();
    for (var i=0;i<10000;i++) func(20);
    var timeStampFinish = Date.now();
    return timeStampFinish - timeStampStart;
}