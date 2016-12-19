var viewMap = new ViewMap({
   root: 'map'
});

initMap = function() {
    Map.initMap();
    viewMap.render(Map.lat, Map.lng);
};

$('#gm-submit').click( function() {
    Map.geocodeAddress($('#gm-address')[0].value)
        .then(function(result) {
            viewMap.putMarker(result)
        });
});

