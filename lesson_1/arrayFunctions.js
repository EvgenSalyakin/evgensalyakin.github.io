var arr = [0, 12, 22, 5, 9];
console.dir(arr);

document.getElementById("init0").innerHTML += arr.join(',');
item = arr.shift();
arr.push(item);
document.getElementById("result0").innerHTML += arr.join(',');

document.getElementById("init1").innerHTML += arr.toString();
arr.sort(function (a, b) {
    return a - b;
});
document.getElementById("result1").innerHTML += arr.toString();

document.getElementById("init2").innerHTML += arr;
arr.reverse();
document.getElementById("result2").innerHTML += arr;

document.getElementById("init3").innerHTML += arr;
arr.splice(0, 2, 77, 78);
document.getElementById("result3").innerHTML += arr;

document.getElementById("init4").innerHTML += arr;
var percents = arr.map(function (num, id, ar) {
    var sum = 0;
    ar.forEach(function (n) {
        sum += n;
    });
    return (num / sum).toFixed(3) + '%';
});
document.getElementById("result4").innerHTML += percents;