var height = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

var water = waterValume(height);
console.log('Water valume:' + water);
document.getElementById('arr').innerHTML += height.toString();
document.getElementById('result').innerHTML += water;

function waterValume(height) {
    var max = height.max();
    var min = height.min() + 1;
    var water = 0;

    for (var i = min; i <= max; i++) {
        var start = height.length - 1;
        var finish = 0;
        var kol = 0;
        for (var k = 0; k < height.length; k++) {
            if (height[k] >= i) {
                kol++;
                if (start > k) start = k;
                if (finish < k) finish = k;
            }
        }
        if (kol > 0) {
            water += finish - start - kol + 1
        }
    }
    return water;
}
