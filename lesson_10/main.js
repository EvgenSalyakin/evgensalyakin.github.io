$('#newsBTN').click(function () {
    getNews().then(function () {
        $('.carousel').carousel();
    });
});

$(document).ready(function(){
    $('ul.tabs').tabs();
    getNews().then(function () {
        $('.carousel').carousel();
    });
});

function getNews() {
    return $.ajax({
        method: 'GET',
        cache: false,
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2F',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            processingNews(data)
        },
        error: function (err) {
            alert(err);
        },
    });
}

function processingNews(data) {
    var news = [];
    var text = "";
    var arrWord = [];
    var exceptions = ["а","і","в","у","на","під","з","та","про","вже","від","без","поки","коли","який","якої","його",
        "ще","якщо","їх","через","до","не","що","й","за","ле","то","майже","понад","як","так","ні"];

    $(".carousel").empty().removeClass("initialized");
    data.items.forEach(function (item) {
        news.push(item.title);
        text += " " + item.title;
        $(".carousel").append("<a class='carousel-item' ><p>" + item.title + "</p></a>");
    });
    text = text.trim();
    var reg = /[а-яА-ЯіІєЄїЇ'’]+/ig;

    text.match(reg).forEach(function (word) {
        word = word.toLowerCase();

        if (exceptions.indexOf(word)!=-1) return;

        var index = -1;
        for (var i = 0; i < arrWord.length; i++) {
            if (arrWord[i].word == word) { index = i; break; }
        }

        if (index==-1) {
            arrWord.push({"word":word,"count":1});
        } else {
            ++arrWord[index].count;
        }
    });

    var arr = arrWord.sort(function (a, b) {
        if (a.word.length < b.word.length) return -1;
        if (a.word.length > b.word.length) return 1;
        return 0;
    });

    var long = '';
    var short = '';
    for (var i = 0, n = arr.length-1; i<4; i++, n--) {
        short = short + arr[i].word +', ';
        long = long + arr[n].word +', ';
    };
    short = short + arr[i].word;
    long = long + arr[n].word;

    document.getElementById("short-word").innerHTML = "<p>" + short + "</p>";
    document.getElementById("long-word").innerHTML = "<p>" + long + "</p>";


    arr = arrWord.sort(function (a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });

    var most = '';
    for (var i = 0; i<4; i++) {
        most = most + arr[i].word +' : '+arr[i].count+', ';
    };
    most = most + arr[i].word+' : '+arr[i].count;
    document.getElementById("most-word").innerHTML = "<p>" + most + "</p>";
}