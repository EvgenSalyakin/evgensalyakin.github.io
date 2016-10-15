var arr = [0, 12, 22, 5, 9];
console.dir('Initial: ' + arr.join(','));

document.getElementById("description0").innerHTML += "The <b>push()</b> method can append one or more elements to the end of an array." +
    "The <b>pop()</b> method pulls the last element off of the given array and returns it. " +
    "The <b>unshift()</b> method is like the push() method, only it works at the beginning of the array. The unshift() method can prepend one or more elements to the beginning of an array. " +
    "The <b>shift()</b> method is like the pop() method, only it works at the beginning of the array. The shift() method pulls the first element off of the given array and returns it.";
document.getElementById("example0").innerHTML += "item = arr.shift(); <br> arr.push(item);";
document.getElementById("init0").innerHTML += arr.toString();
item = arr.shift();
arr.push(item);
document.getElementById("result0").innerHTML += arr.toString();

document.getElementById("description1").innerHTML += "The <b>sort()</b> method sorts the items of an array." +
    "The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down)." +
    "By default, the sort() method sorts the values as strings in alphabetical and ascending order.";
document.getElementById("example1").innerHTML += "arr.sort(function(a, b) {<br>return a - b;<br>});";
document.getElementById("init1").innerHTML += arr.toString();
arr.sort(function (a, b) {
    return a - b;
});
document.getElementById("result1").innerHTML += arr.toString();

document.getElementById("description2").innerHTML += "The <b>reverse()</b> method reverses the element of an array. The first array element becomes the last and the last becomes the first.";
document.getElementById("example2").innerHTML += "arr.reverse();";
document.getElementById("init2").innerHTML += arr.toString();
arr.reverse();
document.getElementById("result2").innerHTML += arr.toString();

document.getElementById("description3").innerHTML += "The <b>splice()</b> method adds/removes items to/from an array, and returns the removed item(s).";
document.getElementById("example3").innerHTML += "arr.splice(0, 2, 77, 78);";
document.getElementById("init3").innerHTML += arr.toString();
arr.splice(0, 2, 77, 78);
document.getElementById("result3").innerHTML += arr.toString();

document.getElementById("description4").innerHTML += "The <b>map()</b> method creates a new array with the results of calling a function for every array element." +
    "The map() method calls the provided function once for each element in an array, in order." +
    "Note: map() does not execute the function for array elements without values." +
    "Note: map() does not change the original array.";
document.getElementById("example4").innerHTML += "var percents = arr.map(function (num, id, ar) {<br>" +
    "var sum = 0;<br>ar.forEach(function (n) {sum += n;});<br>return (num / sum).toFixed(3) + '%';<br>});";
document.getElementById("init4").innerHTML += arr.toString();
var percents = arr.map(function (num, id, ar) {
    var sum = 0;
    ar.forEach(function (n) {
        sum += n;
    });
    return (num / sum).toFixed(3) + '%';
});
document.getElementById("result4").innerHTML += percents.toString();