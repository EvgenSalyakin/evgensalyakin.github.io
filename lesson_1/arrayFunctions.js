var arr = [0,12,22,5,9];
console.log('Initial: '+arr.join(','));
item = arr.shift();
console.log('Shift: '+arr.join(','));
arr.push(item);
console.log('Push: '+arr.join(','));

arr.sort(function(a, b) {
    return a - b;
});
console.log('Sort: '+arr.join(','));

arr.reverse();
console.log('Revers: '+arr.join(','));