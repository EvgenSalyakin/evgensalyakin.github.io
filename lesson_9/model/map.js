var Map =  {
    lat: 49.444433,
    lng: 32.059766999999965,


    initMap:function () {
        this.geocoder = new google.maps.Geocoder();
    },

    geocodeAddress: function (address) {
        var that = this;
        return new Promise(function (succes,fail) {
            that.address = address;
            that.geocoder.geocode({'address': address}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    that.lat = results[0].geometry.location.lat();
                    that.lng = results[0].geometry.location.lng();
                    that.location = results[0].geometry.location;
                    succes({
                        location:that.location,
                        formatted_address:results[0].formatted_address
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                    fail();
                }
            });
        });
    }
};
