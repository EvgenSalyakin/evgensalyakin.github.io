function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function difference(ar,ar2) {
    var dif = [];
    for (var i=0; i<ar.length; i++) {
        dif[i] = ar2[i] - ar[i];
    }
    return dif;
}