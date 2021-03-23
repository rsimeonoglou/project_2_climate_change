function createMap(){

var map = L.map("map", {
    center: [51.505, -0.09],
    zoom: 1
});
          
// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v9",
    accessToken: API_KEY
}).addTo(map);
    
// Heatmap layer
// Assign the json data to a variable
    var geopopulation = "/static/data/geo_population.json";
    // JSON promise
    d3.json(geopopulation).then((response) =>{
         
      var heatArray = [];
    
      for (var i = 0; i < response.data.length; i++) {
        var location = [response.data[i][1], response.data[i][2]];
        var population = response.data[i][4];
        
        if (location) {
          heatArray.push([location[1], location[0], population]);
        }
      }
    
    var heat = L.heatLayer(heatArray, {
        radius: 10,
        blur: 15
      }).addTo(map);
    
    // Create new marker_cluster group
    var markers = L.markerClusterGroup();

    for( var i = 0; i < response.data.length; i++){
        var popup = response.data[i][0] +
                    '<br/>' + [response.data[i][1],response.data[i][2]] +
                    '<br/>' + response.data[i][4] +
                    '<br/>' + response.data[i][5];

        var myIcon = L.icon({
            iconUrl: '/static/images/pin1.png',
            iconRetinaUrl: '/static/images/pin2.png',
            iconSize: [5, 10],
            iconAnchor: [2, 10],
            popupAnchor: [0, -14]
        });

        if (location) {
            markers.addLayer(L.marker( [response.data[i][1],response.data[i][2]], {icon: myIcon} )
                            .bindPopup( popup ));
        
        }
      }  
    
// Adding markers to map
      map.addLayer(markers); 
    });    
              
    };
    createMap();