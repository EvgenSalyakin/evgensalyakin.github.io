var arr = ['a', 'b', 'c', 4, 5, 6];
var arrProto = ['a', 'b', 'c', 4, 5, 6];

var myFunctions = {push: newPush, pop: newPop, slice: newSlice, join: newJoin, reverse: newReverse};
Array.prototype.push = newPush;
Array.prototype.pop = newPop;
Array.prototype.slice = newSlice;
Array.prototype.join = newJoin;
Array.prototype.reverse = newReverse;

var len = myFunctions.push.apply(arr, ['+', 3]);
var result1 = arr.toString();
var lenProto = arrProto.push('+', 3);
var resultProto1 = arrProto.toString();

console.log('***  Push  ***');
console.log("Function: len = myFunctions.push.apply(arr, ['+', 3])");
console.log("Length: ", len);
console.log("Result array: ", result1);
console.log('-- prototype --');
console.log("Function: len = arrProto.push('+', 3)");
console.log("Length: ", lenProto);
console.log("Result array: ", resultProto1);

/*
console.log('***  Pop  ***');
var item = functionObject.pop.apply(arr);
console.log("Item: ", item);
item = functionObject.pop.apply(arr);
console.log("Item: ", item);
console.log("Result array: ", arrProto.toString());
console.log('-- prototype --');
Array.prototype.pop = functionObject.pop;
item = arrProto.pop();
console.log("Item: ", item);
item = arrProto.pop();
console.log("Item: ", item);
console.log("Result array: ", arrProto.toString());

console.log('***  Slice  ***');
console.log('-- prototype --');
Array.prototype.slice = functionObject.slice;
var newArr = arrProto.slice(2, -1);
console.log("New array: ", newArr.toString());

console.log('***  Join  ***');
console.log('-- prototype --');
Array.prototype.join = functionObject.join;
var str = arrProto.join('+ ');
console.log("Result string: ", str.toString());

console.log('***  Reverse  ***');
console.log('-- prototype --');
Array.prototype.reverse = functionObject.reverse;
arrProto.reverse();
console.log("Result array: ", arrProto.toString());
*/
function newPush() {
    for (var i = 0, len = arguments.length, arrLenght = this.length; i < len; i++, arrLenght++) {
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

function newSlice(begin, end) {
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