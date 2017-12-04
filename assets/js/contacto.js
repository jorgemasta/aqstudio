function initMap() {
    //var myLatlng = new google.maps.LatLng(28.122075, -15.429742);
    var myLatlng = {lat: 28.122075, lng: -15.429742};
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Disabled Map Scroll in Contact Page 
    map.setOptions({'scrollwheel': false});

    // Black and White style for Google Map
    var styles = [
    {
        stylers: [
            { saturation: -100 }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: -8 },
            { visibility: "simplified" }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
    }];
    map.setOptions({styles: styles});

    // Google Map Maker 
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });
}

(function ($, window, document, undefined) {
    'use strict';
	jQuery(document).ready(function(){
        $("#contactform").submit(function(e) {
            e.preventDefault();
          
            $("#submit").fadeOut( "slow", function() {
                $(".thank-you").fadeIn("slow");
            });
        });
    });

    $(window).load(function(){
    /* ==============================================
        PAGE PRELOADER
    =============================================== */
        jQuery("#preloader").delay(600).fadeOut(500); 
        
    });
})(jQuery, window, document);
