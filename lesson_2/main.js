var arr = ['a', 'b', 'c', 4, 5, 6];
var arrProto = ['a', 'b', 'c', 4, 5, 6];

var myFunctions = {push: newPush, pop: newPop, slice: newSlice, join: newJoin, reverse: newReverse, sum:mySum};
Array.prototype.push = newPush;
Array.prototype.pop = newPop;
Array.prototype.slice = newSlice;
Array.prototype.join = newJoin;
Array.prototype.reverse = newReverse;
Number.prototype.sum = mySum;

// 1. push
var len = myFunctions.push.apply(arr, ['+', 3]);
var result1 = arr.toString();
var lenProto = arrProto.push('+', 3);
var resultProto1 = arrProto.toString();

// 2. pop
var item21 = myFunctions.pop.apply(arr);
var item22 = myFunctions.pop.apply(arr);
var result2 = arr.toString();
var item23 = arrProto.pop();
var item24 = arrProto.pop();
var resultProto2 = arrProto.toString();

// 3. slice
var newArr = myFunctions.slice.apply(arr, [2, -1]);
var newArrProto = arrProto.slice(-3);

// 4. join
var str = arr.join('+ ');
var strProto = arrProto.join('* ');

// 5. reverse
var result5 = arr.reverse();
var resultProto5 = arrProto.reverse();

// 6. sum
var x = 8;
var resSum1 = 5 .sum(6);
var resSum2 = x.sum('9','+');
var resSum3 = myFunctions.sum.apply(x,[6,2]);

//******************** Console output ************************************
// 1. push
console.log('***  Push  ***');
console.log("Length: ", len);
console.log("Result array: ", result1);
console.log('-- prototype --');
console.log("Length: ", lenProto);
console.log("Result array: ", resultProto1);

// 2. pop
console.log('***  Pop  ***');
console.log("Item: ", item21);
console.log("Item: ", item22);
console.log("Result array: ", result2);
console.log('-- prototype --');
console.log("Item: ", item23);
console.log("Item: ", item24);
console.log("Result array: ", resultProto2);

// 3. slice
console.log('***  Slice  ***');
console.log("New array: ", newArr);
console.log('-- prototype --');
console.log("New array: ", newArrProto);

// 4. join
console.log('***  Join  ***');
console.log("Result string: ", str);
console.log('-- prototype --');
console.log("Result string: ", strProto);

// 5. reverse
console.log('***  Reverse  ***');
console.log("Result array: ", result5);
console.log('-- prototype --');
console.log("Result array: ", resultProto5);

// 6. sum
console.log('***  Sum  ***');
console.log('Result 1: ',resSum1);
console.log('Result 2: ',resSum2);
console.log('Result 3: ',resSum3);

//******************** HTML output ************************************
// 1. push
document.getElementById('exp1').innerHTML += "len = myFunctions.push.apply(arr, ['+', 3])";
document.getElementById('result1').innerHTML += "len = " + len + "; arr = " + result1;
document.getElementById('exp1p').innerHTML += "len = arrProto.push('+', 3)";
document.getElementById('result1p').innerHTML += "len = " + len + "; arrProto = " + resultProto1;

// 2. pop
document.getElementById('exp2').innerHTML += "item21 = myFunctions.pop.apply(arr); item22 = myFunctions.pop.apply(arr);";
document.getElementById('result2').innerHTML += "item21 = " + item21 + "; item22 = " + item22 + "; arr = " + result2;
document.getElementById('exp2p').innerHTML += "item23 = arrProto.pop(); item24 = arrProto.pop();";
document.getElementById('result2p').innerHTML += "item23 = " + item23 + "; item24 = " + item24 + "; arrProto = " + resultProto2;

// 3. slice
document.getElementById('exp3').innerHTML += "newArr = myFunctions.slice.apply(arr, [2, -1]);";
document.getElementById('result3').innerHTML += "newArr = " + newArr;
document.getElementById('exp3p').innerHTML += "newArrProto = arrProto.slice(-3)";
document.getElementById('result3p').innerHTML += "newArrProto = " + newArrProto;

// 4. join
document.getElementById('exp4').innerHTML += "str = arr.join('+ ');";
document.getElementById('result4').innerHTML += "str = " + str;
document.getElementById('exp4p').innerHTML += "strProto = arrProto.join('* ');";
document.getElementById('result4p').innerHTML += "strProto = " + strProto;

// 5. reverse
document.getElementById('exp5').innerHTML += "result5 = arrProto.reverse();";
document.getElementById('result5').innerHTML += "result5 = " + result5;
document.getElementById('exp5p').innerHTML += "resultProto5 = arrProto.reverse();";
document.getElementById('result5p').innerHTML += "resultProto5 = " + resultProto5;

// 6. sum
document.getElementById('exp6').innerHTML += "var x = 8; resSum1 = 5 .sum(6); resSum2 = x.sum('9','+');";
document.getElementById('result6').innerHTML += "resSum1 = " + resSum1 + "; resSum2 = " + resSum2;
document.getElementById('exp6p').innerHTML += "var x = 8; resSum3 = myFunctions.sum.apply(x,[6,2]);";
document.getElementById('result6p').innerHTML += "resSum3 = " + resSum3;

//******************** Functions ************************************
function newPush() {
    var len = arguments.length;
    for (var i = 0, arrLenght = this.length; i < len; i++, arrLenght++) {
        this[arrLenght] = arguments[i];
    }
    return this.length;
}

function newPop() {
    var arrLength = this.length - 1;
    item = this[arrLength];
    delete this[arrLength];
    this.length = arrLength;
    return item;
}

function newSlice(begin=0, end=this.length) {
    var result = [];
    if (begin < 0) begin += this.length;
    if (end < 0) end += this.length;
    if ((begin < 0) || (end < 0) || (begin > end) || (begin > this.length)) return result;
    for (var i = 0, n = begin; n < end; i++, n++) {
        result[i] = this[n];
    }
    return result;
}

function newJoin(separator = ',') {
    var str = '';
    if (this.length == 0) return str;
    if (this.length == 1) return this[0].toString();
    for (var i = 0; i < this.length - 1; i++) {
        str += this[i].toString();
        str += separator;
    }
    str += this[i].toString();
    return str;
}

function newReverse() {
    for (var i = 0, n = this.length - 1; i < n; i++, n--) {
        var item = this[i];
        this[i] = this[n];
        this[n] = item;
    }
    return this;
}

function mySum() {
    var result = this;
    if (arguments.length == 0) return result;
    for (var i=0, len = arguments.length; i<len; i++) {
        var item = arguments[i];
        if (isNaN(item)) item = 0;
        result += (+item);
    }
    return result;
}