function perform() {
    let param = arguments[1]();

    return {
        then: function(cb) {
            param = cb(param);
            return this;
        }
    }
}

perform(null, function() {
    var param = 1;
    console.log(param);
    return param;
})
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    });