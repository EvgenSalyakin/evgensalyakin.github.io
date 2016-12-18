//fb:login-button   onlogin
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        fbAPI(response.authResponse.accessToken,response.authResponse.userID);
    } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log into this app.';
    } else {
        document.getElementById('status').innerHTML = 'Please log into Facebook.';
    }
}

function fbAPI(token) {
    var fbUser = getUser(token);

    // var tagFriends = [];
    // fbUser.then(function (id) {
    //         getTagFriends(id,tagFriends).then(function () {
    //             console.log('Count of friends for tag:' + tagFriends.length);
    //         });
    //     }
    // );
    //
    // var friends = [];
    // fbUser.then(function (id) {
    //         getFriends(id,token,friends).then(function () {
    //             console.log('Count of friends:' + friends.length);
    //         });
    //     }
    // );
}

function getUser(token) {
    return new Promise(function (succes) {
        FB.api('/me?fields=id,name,hometown,location&access_token='+token, function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
            succes(response.id);
        });
    });
}

function getTagFriends(id,friends) {
    return new Promise(function (succes) {
        FB.api('/me/taggable_friends?limit=10&offset=0&fields=id,name', function (response) {
            //FB.api('/'+id+'/taggable_friends?limit=3&offset=0', function (response) {
            response.data.forEach(function (item) {
                //getFriendDetails(item.id);
                console.log('Friend: ' + item.name);
                friends.push(item);
            });
            if ('next' in response.paging) nextTagFriends(response.paging.next, friends, succes);
            else succes();
        });
    });
}

function nextTagFriends(next, friends, succes) {
    FB.api(next, function (response) {
        response.data.forEach(function (item) {
            console.log('Friend: ' + item.name);
            friends.push(item);
        });
        if ('next' in response.paging) nextTagFriends(response.paging.next, friends, succes);
        else succes();
    });
}

function getFriends(id,token,friends) {
    return new Promise(function (succes) {
        FB.api('/me/friends?fields=id,name,hometown,location&access_token='+token, function (response) {
            var p = [];
            response.data.forEach(function (item) {
                //getFriendDetails(item.id);
                console.log('Friend: ' + item.name);
                p.push(getFriendDetails(item.id,token));
                friends.push(item);
            });
            //if ('next' in response.paging) nextTabFriends(response.paging.next, friends, succes);
            Promise.all(p).then(function () {
                succes();
            })

        });
    });
}

function getFriendDetails(id,token) {
    return new Promise(function (succes) {
        FB.api('/'+id+'?fields=id,name,hometown,location&access_token='+token,function (response) {
            console.log('User details...');
            succes();
        });
    })

}

