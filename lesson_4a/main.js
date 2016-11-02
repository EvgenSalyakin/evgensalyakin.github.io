
var i = getRandom(0,names.length-1);
var tam = new Tamagotchi(names[i],MAXPOWER,isStep,isDie);
var actions=tam.getMethods();

// while (!tam.isDied()) {
//     var r1 = getRandom(0,Math.floor(MAXPOWER/2));
//     var r2 = getRandom(0,Math.floor(MAXPOWER/2));
//     var ac = getRandom(0,actions.length-1);
//     tam.go(r1).do(actions[ac],r2);
// }

var timerId = setInterval(tam.stepLife.bind(tam),500);

function isDie() {
    clearInterval(timerId);
}

function isStep() {
    var r1 = getRandom(0,Math.floor(MAXPOWER/2));
    var r2 = getRandom(0,Math.floor(MAXPOWER/2));
    var ac = getRandom(0,actions.length-1);
    tam.go(r1).do(actions[ac],r2);
}