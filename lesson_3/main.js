
//console.log('Factorial = ',factorial(20));
//console.log('Factorial = ',factorialSimple(20));

//console.log(performanceMeasurement(factorial,[20]));
//console.log(performanceMeasurement(factorialSimple,[20]));

//console.log('5^6 = ',involution(5,6));
//console.log('5^6 = ',involutionSimple(5,6));

//console.log(performanceMeasurement(involution,[5,6]));
//console.log(performanceMeasurement(involutionSimple,[5,6]));

//console.log('3742: 3+7+4+2 = ',sumDigit(3742));
//console.log('3742: 3+7+4+2 = ',sumDigitSimple(3742));

//console.log(performanceMeasurement(sumDigit,[374267833]));
//console.log(performanceMeasurement(sumDigitSimple,[374267833]));

//console.log('Arithmetic Progression: ',arithmeticProgression(5));
//console.log('Arithmetic Progression: ',arithmeticProgressionSimple(5));
//console.log('Arithmetic Progression: ',arithmeticProgressionFormula(5));

console.log(performanceMeasurement(arithmeticProgression,[3783]));
console.log(performanceMeasurement(arithmeticProgressionSimple,[3783]));
console.log(performanceMeasurement(arithmeticProgressionFormula,[3783]));

function factorial(n) {
    if (n==0) return 1;
    return n * factorial(n-1);
}

function factorialSimple(n) {
    var rez = 1;
    for (var i = 1; i <= n; ++i) rez *= i;
    return rez;
}

function involution(value,degree) {
    if (degree==0) return 1;
    if (degree==1) return value;
    return value * involution(value,degree-1);
}

function involutionSimple(value,degree) {
    var rez = 1;
    for (var i = 1; i <= degree; ++i) rez *= value;
    return rez;
}

function sumDigit(number) {
    if (number==0) return 0;
    var digit = number % 10;
    return digit + sumDigit(number/10>>0);
}

function sumDigitSimple(number) {
    var rez = 0;
    var s = number.toString();
    var lenght = s.length;
    for (var i = 0; i < lenght; i++) rez += (+s.charAt(i));
    return rez;
}

function arithmeticProgression(number) {
    if (number==0) return 0;
    return number + arithmeticProgression(number-1);
}

function arithmeticProgressionSimple(number) {
    var rez = 0;
    for (var i = 1; i <= number; i++) rez += i;
    return rez;
}

function arithmeticProgressionFormula(number) {
    return ((1+number)/2)*number;
}

function performanceMeasurement(func,arr) {
    var timeStampStart = Date.now();
    for (var i=0;i<100000;i++) func.apply(null,arr);
    var timeStampFinish = Date.now();
    return timeStampFinish - timeStampStart;
}