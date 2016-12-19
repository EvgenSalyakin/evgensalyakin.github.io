function ViewMap(options) {
    this.root = $('#'+options.root);
    this.label= 'A';
}

ViewMap.prototype.render = function (lat,lng) {
    this.map = new google.maps.Map(this.root[0], {
        zoom: 8,
        center: {lat: lat, lng: lng}
    });
};

ViewMap.prototype.putMarker = function (result) {
            var location = result.location;
            var address = result.formatted_address;
            var lat = location.lat();
            var lng = location.lng();
            this.map.setCenter(location);

            var infowindow = new google.maps.InfoWindow({
                content: '<p><b>'+address+'</b><br>lat/lng: '+lat+'/'+lng+'</p>'
            });


            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: location,
                title: address+' lat/lng : '+lat+'/'+lng,
                label: this.label
            });
            marker.addListener('click', function() {
                infowindow.open(this.map, marker);
            });
};