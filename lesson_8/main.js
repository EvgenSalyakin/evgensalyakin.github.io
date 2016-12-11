(function () {
    var change, checkVictory, eventClick, getTime, rebuild, start, startTime;
    window.state = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
    ];
    startTime = false;
    Array.prototype.shuffle = function () {
        return this.sort(function () {
            return 0.5 - Math.random();
        });
    };
    document.onkeydown = function (e) {
        var i, k;
        e = e || window.event;
        i = state.indexOf(16);
        k = e.keyCode;
        switch (true) {
            case k === 38 && i < 12:
                return change(i, i + 4);
            case k === 40 && i > 3:
                return change(i, i - 4);
            case k === 37 && i < 15:
                return change(i, i + 1);
            case k === 39 && i > 0:
                return change(i, i - 1);
        }
    };
    checkVictory = function () {
        var i, j, l, len, victory;
        victory = true;
        j = 1;
        for (l = 0, len = state.length; l < len; l++) {
            i = state[l];
            if (i !== j) {
                victory = false;
                break;
            } else {
                j++;
            }
        }
        return victory;
    };
    change = function (a, b) {
        var tmp;
        tmp = state[a];
        state[a] = state[b];
        state[b] = tmp;
        return rebuild();
    };
    eventClick = function (id) {
        var i;
        i = state.indexOf(id);
        switch (16) {
            case state[i + 1]:
                return change(i, i + 1);
            case state[i - 1]:
                return change(i, i - 1);
            case state[i + 4]:
                return change(i, i + 4);
            case state[i - 4]:
                return change(i, i - 4);
        }
    };
    getTime = function (time) {
        var minutes, seconds;
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;
        switch (true) {
            case time < 60:
                return seconds + ' s';
            case time > 60:
                return minutes + ' m ' + seconds + ' s';
        }
    };
    rebuild = function () {
        var again, time;
        document.getElementById('grid').innerHTML = '';
        if (checkVictory()) {
            time = parseInt((Date.now() - startTime) / 1000);
            time = getTime(time);
            again = document.createElement('span');
            again.innerHTML = 'Again';
            again.onlick = start;
            document.getElementById('grid').innerHTML = '<span class=\'victory\'>Victory !<br>' + time + '</span>';
            return;
        }
        return state.forEach(function (item, i, ar) {
            var br, span;
            span = document.createElement('span');
            span.innerHTML = item;
            span.setAttribute('id', item);
            if (parseInt(item) === 16) {
                span.setAttribute('class', 'hide');
            } else {
                span.onclick = function () {
                    var id;
                    id = parseInt(this.getAttribute('id'));
                    return eventClick(id);
                };
            }
            document.getElementById('grid').appendChild(span);
            if (i === 3 || i === 7 || i === 11 || i === 15) {
                br = document.createElement('br');
                return document.getElementById('grid').appendChild(br);
            }
        });
    };
    start = function () {
        start = document.createElement('span');
        start.setAttribute('class', 'start');
        start.innerHTML = 'Start';
        start.onclick = function () {
            state.shuffle();
            startTime = Date.now();
            return rebuild();
        };
        return document.getElementById('grid').appendChild(start);
    };
    start();
}.call(this));