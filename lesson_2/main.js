var arr =['a', 'b', 'c', 4, 5, 6];

var functionObject = {};

arr.push = function () {
    for (var i=0, len = arguments.length, arrLenght = this.length; i<len; i++, arrLenght++) {
        this[arrLenght] = arguments[i];
    }
    return this.length;
};

arr.pop = function () {
    var arrLength = this.length-1;
    item = this[arrLength];
    delete this[arrLength];
    this.length = arrLength;
    return item;
};

arr.slice = function (begin, end) {
    var result = [];
    if (begin < 0) begin += this.length;
    if (end < 0) end += this.length;
    if ((begin<0) || (end<0) || (begin>end) || (begin>this.length)) return result;
    for (var i=0, n = begin; n<end; i++, n++) {
        result[i] = this[n];
    }
    return result;
};

arr.join = function (separator = ',') {
    var str = '';
    if (this.length == 0) return str;
    if (this.length == 1) return this[0].toString();
    for (var i=0; i<this.length-1; i++) {
        str += this[i].toString();
        str += separator;
    }
    str += this[i].toString();
    return str;
};

arr.reverse = function() {
    var half = this.length/2>>0;
    for (var i=0,n=this.length-1;i<half;i++,n--) {
        item = this[i];
        this[i] = this[n];
        this[n] = item;
    }
    return this;
};

console.log('***  Push  ***');
var len = arr.push('+',3);
console.log(len);
console.log(arr.toString());

console.log('***  Pop  ***');
var item = arr.pop();
console.log(item);
item = arr.pop();
console.log(item);
console.log(arr.toString());

console.log('***  Slice  ***');
var newArr = arr.slice(2,-1);
console.log(newArr.toString());

console.log('***  Join  ***');
var str = arr.join('+ ');
console.log(str.toString());

console.log('***  Reverse  ***');
arr.reverse();
console.log(arr.toString());