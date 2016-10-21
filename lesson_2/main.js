var arr =['a', 'b', 'c', 4, 5, 6];

arr.push = function () {
    for (var i=0, len = arguments.length, arrLenght = this.length; i<len; i++, arrLenght++) {
        this[arrLenght] = arguments[i];
    }
    return this.length;
};

arr.pop = function () {
    var arrLenght = this.length-1;
    item = this[arrLenght];
    delete this[arrLenght];
    this.length = arrLenght;
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