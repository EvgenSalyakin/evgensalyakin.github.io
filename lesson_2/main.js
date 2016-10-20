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
    return item;
}

var len = arr.push('+',3);
console.log('***  Push  ***');
console.log(len);
console.log(arr.toString());

var item = arr.pop();
console.log('***  Pop  ***');
console.log(item);
console.log(arr.toString());


