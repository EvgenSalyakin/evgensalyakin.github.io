$('#newsBTN').click(function () {
    getNews();
});

function getNews() {
    $.ajax({
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
    var arrLong = [];
    var arrShort = [];
    var arrMost = [];
    var arrWord = [];
    var exceptions = ["а","і","в","у","на","під","з","та","про","вже","від","без","поки","коли","який","якої","його",
        "ще","якщо","їх","через"];

    //document.getElementById("result").innerHTML += items.title;
    data.items.forEach(function (item) {
        news.push(item.title);
        document.getElementById("result").innerHTML += "<p>" + item.title + "</p>";
        text += " " + item.title;
    });
    text = text.trim();
    var reg = /[а-яА-ЯіІєЄїЇ'’]+/ig;

    text.match(reg).forEach(function (word) {
        word = word.toLowerCase();
        // if (long == undefined) long = word;
        // if (shot == undefined) shot = word;
        //
        // if (long.length < word.length) long = word;
        // if (shot.length > word.length) shot = word;

        if (exceptions.indexOf(word)!=-1) return;
        //var index = arrWord.indexOf(word);

        // for (var i = 0; i < exceptions.length; i++) {
        //     if (exceptions[i].word == word) {
        //         return;
        //     }
        // }

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

    // arr.forEach(function (item) {
    //     console.log(item.word);
    // });

    var long = '';
    var short = '';
    for (var i = 0, n = arr.length-1; i<4; i++, n--) {
        short = short + arr[i].word +', ';
        long = long + arr[n].word +', ';
    };
    short = short + arr[i].word;
    long = long + arr[n].word;

    console.log("Short " + short);

    document.getElementById("short-word").innerHTML = "<p>Short: " + short + "</p>";
    document.getElementById("long-word").innerHTML = "<p>Long: " + long + "</p>";


    arr = arrWord.sort(function (a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });

    arr.forEach(function (item) {
         console.log(item.word+" : "+item.count);
    });

    var most = '';
    for (var i = 0; i<4; i++) {
        most = most + arr[i].word +' : '+arr[i].count+', ';
    };
    most = most + arr[i].word+' : '+arr[i].count;
    document.getElementById("most-word").innerHTML = "<p>Most: " + most + "</p>";
}