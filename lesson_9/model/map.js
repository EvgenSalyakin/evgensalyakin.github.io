var label;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();
    label = 0;
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {

            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();
            resultsMap.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow({
                content: '<p><b>'+address+'</b><br>lat/lng: '+lat+'/'+lng+'</p>'
            });

            label++;
            var marker = new google.maps.Marker({
                map: resultsMap,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location,
                title: address+' lat/lng : '+lat+'/'+lng,
                label: label.toString()
            });
            marker.addListener('click', function() {
                infowindow.open(resultsMap, marker);
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}