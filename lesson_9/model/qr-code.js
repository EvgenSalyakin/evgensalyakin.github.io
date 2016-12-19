function getQR() {
    var url = encodeURI($('#qr-input')[0].value);
    $.ajax({
        url: "https://pierre2106j-qrcode.p.mashape.com/api",
        type: "GET",
        data: {
            backcolor:"ffffff",
            ecl:"H",
            forecolor:"000000",
            pixel:"4",
            text:url,
            type:"url"
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader('X-Mashape-Key', 'm5zusdFTO0mshFerGv4AqGfh8majp19NHsrjsnawcYKE4q2qsw');
            xhr.setRequestHeader('Accept', 'text/plain');
        },
        success: function(result) {
            document.getElementById('qr-img').setAttribute('src',result);
        }
    });
};

$('#qr-submit').click(getQR);

getQR();