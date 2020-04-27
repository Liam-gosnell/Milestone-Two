 function initMap() {
                        var map = new google.maps.Map(document.getElementById("map"),{
                            zoom: 3, 
                            center: {
                                lat: 46.619261,
                                lng: -33.134766

                            }
                        });
                        var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 42.104101,
                lng: -83.242062
            }, {
                lat: 49.662222,
                lng: 18.433333
            },{
                lat: 47.698889,
                lng: 17.684722
            },
            {
                lat: 48.176944,
                lng: 11.56
            },
            {
                lat: 37.494756,
                lng: -121.944767
            },
             {
                lat: 52.423056,
                lng: 10.787222
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
                    }