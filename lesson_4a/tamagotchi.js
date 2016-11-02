function Tamagotchi(nameP,powerP) {

    var died = false;
    var name = nameP || "No name";
    var age = 0;
    var happiness = 0;
    var riches = 0;
    var intellect = powerP || MAXPOWER;
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
            age++;
            if (hunger < 0) hunger = 0;
            if (thirst < 0) thirst = 0;
            if (force < 0) force = 0;
            if (intellect <0) intellect = 0;
            if (hunger == 0 || thirst == 0 || force == 0 || intellect == 0) health--;
            if (health < 0 || age>MAXAGE) die();
        }
    }

    function die() {
        if (!died) {
            died = true;
            console.log(name+' is died on '+age+' step! His happiness level was equal '+happiness+' and he have '+riches+' coins.');
        }
    }

    this.getMethods = function () {
        return ['eat','drink','sleep','play','study','watchTV','work'];
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
            hunger--;
            thirst--;
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
                force--;
                hunger--;
                thirst--;
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
            hunger--;
            thirst--;
            step();
            log(' PLAY    :');
        }
        return this;
    };

    this.watchTV = function () {
        if (!died) {
            happiness++;
            intellect--;
            hunger--;
            thirst--;
            step();
            log(' WATCH TV:');
        }
        return this;
    };

    this.study = function () {
        if (!died) {
            intellect++;
            hunger--;
            thirst--;
            step();
            log(' STUDY   :');
        }
        return this;
    };

    this.work = function () {
        if (!died) {
            riches += intellect + happiness;
            hunger--;
            thirst--;
            step();
            log(' WORK    :');
        }
        return this;
     };

    this.getStatus = function () {
        (died)? console.log(name+' is died!') :
            console.log('age: '+age+'; riches: '+riches+' happiness: '+happiness+' health: '+health+' (h: '+hunger+' t: '+thirst+' f: '+force+' i: '+intellect+')');
    };

    this.isDied = function () {
        return died;
    }
}