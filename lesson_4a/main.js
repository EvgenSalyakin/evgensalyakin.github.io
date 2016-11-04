var i = getRandom(0,names.length-1);
var tam = new Tamagotchi(names[i],MAXPOWER,isStep,isDie);
document.getElementById('tam').attributes.src.value = "http://smiles24.ru/data/smiles/smiles-angeli-153.gif";
document.getElementById('name').innerHTML = tam.getName();
document.getElementById('action').innerHTML = "BIRTH";
//document.getElementById('action-description').innerHTML = "Come into the world!";
var p2, dif;
var p=tam.getParams();
document.getElementById('age').innerHTML = p[0];
document.getElementById('riches').innerHTML = p[1];
document.getElementById('happiness').innerHTML = p[2];
document.getElementById('intellect').innerHTML = p[3];
document.getElementById('health').innerHTML = p[4];
document.getElementById('hunger').innerHTML = p[5];
document.getElementById('thirst').innerHTML = p[6];
document.getElementById('force').innerHTML = p[7];

// ['eat','drink','sleep','play','study','watchTV','work'];
var src = [ 'http://smiles24.ru/data/smiles/smiles-eda-587.gif',
            'http://smiles24.ru/data/smiles/smiles-pyushie-192.gif',
            'http://smiles24.ru/data/smiles/smiles-son-194.gif',
            'http://smiles24.ru/data/smiles/smiles-igry-25.gif',
            'http://smiles24.ru/data/smiles/smiles-dumy-128.gif',
            'http://smiles24.ru/data/smiles/smiles-televizor-15.gif',
            'http://smiles24.ru/data/smiles/vremyzprovojdenie-183.gif'];

var actions = tam.getMethods();
var actionsText = tam.getMethodsText();
var methodsActions = tam.getMethodsActions();

var timerId = setInterval(tam.stepLife.bind(tam),STEPINTERVAL);

function isDie() {
    clearInterval(timerId);
    document.getElementById('tam').attributes.src.value = "http://smiles24.ru/data/smiles/smiles-cherti-141.gif";
    document.getElementById('action').innerHTML = "END";
    //document.getElementById('action-description').innerHTML = 'GAME OVER!';
    p=tam.getParams();
    document.getElementById('age').innerHTML = p[0];
    document.getElementById('riches').innerHTML = p[1];
    document.getElementById('happiness').innerHTML = p[2];
    document.getElementById('intellect').innerHTML = p[3];
    document.getElementById('health').innerHTML = p[4];
    document.getElementById('hunger').innerHTML = p[5];
    document.getElementById('thirst').innerHTML = p[6];
    document.getElementById('force').innerHTML = p[7];
    document.getElementById('dif-age').innerHTML = '';
    document.getElementById('dif-riches').innerHTML = '';
    document.getElementById('dif-happiness').innerHTML = '';
    document.getElementById('dif-intellect').innerHTML = '';
    document.getElementById('dif-health').innerHTML = '';
    document.getElementById('dif-hunger').innerHTML = '';
    document.getElementById('dif-thirst').innerHTML = '';
    document.getElementById('dif-force').innerHTML = '';
    document.getElementById('dif-action').innerHTML = '';
}

function isStep(p) {
    document.getElementById('age').innerHTML = p[0];
    document.getElementById('riches').innerHTML = p[1];
    document.getElementById('happiness').innerHTML = p[2];
    document.getElementById('intellect').innerHTML = p[3];
    document.getElementById('health').innerHTML = p[4];
    document.getElementById('hunger').innerHTML = p[5];
    document.getElementById('thirst').innerHTML = p[6];
    document.getElementById('force').innerHTML = p[7];
    var r1 = getRandom(0,Math.floor(MAXPOWER/2));
    var r2 = getRandom(1,Math.floor(MAXPOWER/2));
    var ac = getRandom(0,actions.length-1);
    tam.go(r1).do(actions[ac],r2);
        if (!tam.isDied()) {
        document.getElementById('tam').attributes.src.value = src[ac];
        document.getElementById('action').innerHTML = actionsText[ac].toUpperCase();
        //document.getElementById('action-description').innerHTML = 'value='+r2+';'+methodsActions[ac];
        p2=tam.getParams();
        dif = difference(p,p2);
        document.getElementById('dif-age').innerHTML = (dif[0]==0)?'':dif[0];
        document.getElementById('dif-riches').innerHTML = (dif[1]==0)?'':dif[1];
        document.getElementById('dif-happiness').innerHTML = (dif[2]==0)?'':dif[2];
        document.getElementById('dif-intellect').innerHTML = (dif[3]==0)?'':dif[3];
        document.getElementById('dif-health').innerHTML = (dif[4]==0)?'':dif[4];
        document.getElementById('dif-hunger').innerHTML = (dif[5]==0)?'':dif[5];
        document.getElementById('dif-thirst').innerHTML = (dif[6]==0)?'':dif[6];
        document.getElementById('dif-force').innerHTML = (dif[7]==0)?'':dif[7];
        document.getElementById('dif-action').innerHTML = actionsText[ac];
    }
}