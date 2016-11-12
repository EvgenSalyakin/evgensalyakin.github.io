function Tamagotchi(name = "Name",powerP,callbackStep,callbackDie) {

    var died = false;
    var age = 0;
    var riches = 0;
    var happiness = 1;
    var intellect = 1;
    var health = powerP || MAXPOWER;
    var hunger = powerP || MAXPOWER;
    var thirst = powerP || MAXPOWER;
    var force = powerP || MAXPOWER;
    console.log(name+' come into the world!');

    function log(action) {
        if (!died) console.log(action+'age: '+age+'; riches: '+riches+'; happiness: '+happiness+'; health: '+health+' (hunger: '+hunger+' thirst: '+thirst+' force: '+force+' intellect: '+intellect+')');
    }

    function step() {
        if (!died) {
            //age++;
            //if (hunger == 0 || thirst == 0 || force == 0) health--;
            if (hunger < 0) hunger = 0;
            if (thirst < 0) thirst = 0;
            if (force < 0) force = 0;
            if (intellect <0) intellect = 0;
            if (health < 0) health = 0;
            //if (health < 0 || age>MAXAGE) die();
        }
    }

    function die() {
        if (!died) {
            died = true;
            console.log(name+' is died on '+age+' step! His happiness level was equal '+happiness+' and he have '+riches+' coins.');
            health = 0;
            callbackDie();
        }
    }

    this.stepLife = function () {
        var param = this.getParams();
        if (!died) {
            //console.log('*** New step ***');
            age++;
            hunger--;
            thirst--;
            if (hunger <= 0 || thirst <= 0 || force <= 0) health--;
            if (hunger < 0) hunger = 0;
            if (thirst < 0) thirst = 0;
            if (force < 0) force = 0;
            if (intellect <0) intellect = 0;
            if (health < 0) health = 0;
            if (health <= 0 || age>MAXAGE) die();
        }
        //else console.log('--- New step ---');
        callbackStep(param);
    };

    this.getMethods = function () {
        return ['eat','drink','sleep','play','study','watchTV','work'];
    };

    this.getMethodsText = function () {
        return ['eat','drink','sleep','play','study','TV','work'];
    };

    this.getMethodsActions = function () {
        return ['hunger+=value;',
                'thirst+=value;',
                'force+=value;',
                'happiness++;\nforce--;',
                'intellect++;',
                'happiness++;\nintellect--;',
                'riches += intellect + happiness;\nforce--;'];
    };

    this.do = function (action,value) {
        if (action=='eat') this.eat(value);
        if (action=='drink') this.drink(value);
        if (action=='sleep') this.sleep(value);
        if (action=='play') this.play();
        if (action=='watchTV') this.watchTV();
        if (action=='study') this.study();
        if (action=='work') this.work();
    };

    this.eat = function (value=1) {
        if (value<=0) return this;
        if (!died) {
            if (hunger<MAXPOWER) hunger+=value;
            step();
            log(' EAT  ('+value+'):');
        }
        return this;
    };

    this.drink = function (value=1) {
        if (value<=0) return this;
        if (!died) {
            if (thirst<MAXPOWER) thirst+=value;
            step();
            log(' DRINK('+value+'):');
        }
        return this;
    };

    this.sleep = function (value=1) {
        if (value<=0) return this;
        if (!died) {
            if (force<MAXPOWER) force+=value;
            step();
            log(' SLEEP('+value+'):');
        }
        return this;
    };

    this.go = function (value=1) {
        if (value<=0) return this;
        var i = value;
        if (!died) {
            while (value--) {
                //force--;
                step();
            }
            log(' GO   ('+i+'):');
        }
        return this;
    };

    this.play = function () {
        if (!died) {
            happiness++;
            force--;
            step();
            log(' PLAY    :');
        }
        return this;
    };

    this.watchTV = function () {
        if (!died) {
            happiness++;
            intellect--;
            step();
            log(' WATCH TV:');
        }
        return this;
    };

    this.study = function () {
        if (!died) {
            intellect++;
            step();
            log(' STUDY   :');
        }
        return this;
    };

    this.work = function () {
        if (!died) {
            riches += intellect + happiness;
            force--;
            step();
            log(' WORK    :');
        }
        return this;
     };

    this.getStatus = function () {
        return (died)? (name+' is died!') :
            ('age: '+age+'; riches: '+riches+' happiness: '+happiness+' health: '+health+' (h: '+hunger+' t: '+thirst+' f: '+force+' i: '+intellect+')');
    };

    this.getParams = function () {
        return [age,riches,happiness,intellect,health,hunger,thirst,force];
    };

    this.isDied = function () {
        return died;
    };

    this.getName = function () {
        return name;
    };
}