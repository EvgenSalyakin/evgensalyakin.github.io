
var i = getRandom(0,names.length-1);
var tam = new Tamagotchi(names[i],MAXPOWER);
var actions=tam.getMethods();

while (!tam.isDied()) {
    var r1 = getRandom(0,Math.floor(MAXPOWER/2));
    var r2 = getRandom(0,Math.floor(MAXPOWER/2));
    var ac = getRandom(0,actions.length-1);
    tam.go(r1).do(actions[ac],r2);
}