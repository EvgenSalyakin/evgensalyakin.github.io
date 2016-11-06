'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];

function diferent(n) {
    var s = n.toString();
    var find = false;
    for (var i=0; i<s.length; i++ ) {
        var char = s[i];
        for (var k=i+1; k<s.length; k++ ) {
            if (char == s[k]) find = true;
        }
    }
    return !find;
}
function prettyYear(y) {
    var year = +y;
    if (year<=1000 && year>=9000) return NaN;
    for (var i=year+1; i<=9000;i++) {
        if (diferent(i)) return i;
    }
    return NaN;
}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
