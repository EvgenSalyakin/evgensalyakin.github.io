var i = getRandom(0,names.length-1);
var tam = new Tamagotchi(names[i],MAXPOWER,isStep,isDie);

// ['eat','drink','sleep','play','study','watchTV','work'];
var src = [ 'http://smiles24.ru/data/smiles/smiles-eda-587.gif',
            'http://smiles24.ru/data/smiles/smiles-pyushie-192.gif',
            'http://smiles24.ru/data/smiles/smiles-son-194.gif',
            'http://smiles24.ru/data/smiles/smiles-igry-25.gif',
            'http://smiles24.ru/data/smiles/smiles-dumy-128.gif',
            'http://smiles24.ru/data/smiles/smiles-televizor-15.gif',
            'http://smiles24.ru/data/smiles/vremyzprovojdenie-183.gif'];

var actions=tam.getMethods();

var timerId = setInterval(tam.stepLife.bind(tam),STEPINTERVAL);

function isDie() {
    clearInterval(timerId);
    document.getElementById('tam').attributes.src.value = "http://smiles24.ru/data/smiles/smiles-cherti-141.gif";
}

function isStep() {
    var r1 = getRandom(0,Math.floor(MAXPOWER/2));
    var r2 = getRandom(0,Math.floor(MAXPOWER/2));
    var ac = getRandom(0,actions.length-1);
    tam.go(r1).do(actions[ac],r2);
    if (!tam.isDied()) document.getElementById('tam').attributes.src.value = src[ac];
}