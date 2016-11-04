
var df1 = performanceMeasurement(factorial,[20]);
var df2 = performanceMeasurement(factorialSimple,[20]);
var result1 = (df1<df2) ? factorial(20) : factorialSimple(20);

var di1 = performanceMeasurement(involution,[5,6]);
var di2 = performanceMeasurement(involutionSimple,[5,6]);
var result2 = (di1<di2) ? involution(5,6) : involutionSimple(5,6);

var ds1 = performanceMeasurement(sumDigit,[374267833]);
var ds2 = performanceMeasurement(sumDigitSimple,[374267833]);
var result3 = (ds1<ds2) ? sumDigit(374267833) : sumDigitSimple(374267833);

var da1 = performanceMeasurement(arithmeticProgression,[20]);
var da2 = performanceMeasurement(arithmeticProgressionSimple,[20]);
var da3 = performanceMeasurement(arithmeticProgressionFormula,[20]);
var result4 = (da1<da2) ? arithmeticProgression(20) : (da2<da3) ? arithmeticProgressionSimple(20) : arithmeticProgressionFormula(20);

var dfib1 = performanceMeasurement(fibonacci,[10]);
var dfib2 = performanceMeasurement(fibonacciSimple,[10]);
var result5 = (dfib1<dfib2) ? fibonacci(10) : fibonacciSimple(10);

console.log('Factorial(20) = ',factorial(20));
console.log('Factorial(20) = ',factorialSimple(20));
console.log('5^6 = ',involution(5,6));
console.log('5^6 = ',involutionSimple(5,6));
console.log('3742: 3+7+4+2 = ',sumDigit(3742));
console.log('3742: 3+7+4+2 = ',sumDigitSimple(3742));
console.log('Arithmetic progression 25 : ',arithmeticProgression(25));
console.log('Arithmetic progression 25 : ',arithmeticProgressionSimple(25));
console.log('Arithmetic progression 25 : ',arithmeticProgressionFormula(25));
console.log('Fibonacci(20) = ',fibonacci(20));
console.log('Fibonacci(20) = ',fibonacciSimple(20));

document.getElementById('result1').innerHTML = "factorial(20) = " + result1;
document.getElementById('performance-measurement1').innerHTML += "recursion = " + df1 + "; cycle = " + df2 + ";";
document.getElementById('result2').innerHTML = "5 ^ 6 = " + result2;
document.getElementById('performance-measurement2').innerHTML += "recursion = " + di1 + "; cycle = " + di2 + ";";
document.getElementById('result3').innerHTML = "Sum digits 374267833 = " + result3;
document.getElementById('performance-measurement3').innerHTML += "recursion = " + ds1 + "; cycle = " + ds2 + ";";
document.getElementById('result4').innerHTML = "Arithmetic progression 20 = " + result4;
document.getElementById('performance-measurement4').innerHTML += "recursion = " + da1 + "; cycle = " + da2 + "; formula = " + da3 + ";";
document.getElementById('result5').innerHTML = "Fibonacci(10) = " + result5;
document.getElementById('performance-measurement5').innerHTML += "recursion = " + dfib1 + "; cycle = " + dfib2 + ";";


function factorial(n) {
    if (n<0) return NaN;
    if (n==0) return 1;
    return n * factorial(n-1);
}

function factorialSimple(n) {
    if (n<0) return NaN;
    if (n==0) return 1;
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

function fibonacci(number) {
    if (number==0) return 0;
    if (number==1) return 1;
    return fibonacci(number-1) + fibonacci(number-2);
}

function fibonacciSimple(number) {
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

function performanceMeasurement(func,arr) {
    var timeStampStart = Date.now();
    for (var i=0;i<100000;i++) func.apply(null,arr);
    var timeStampFinish = Date.now();
    return timeStampFinish - timeStampStart;
}