var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2xldGltYWhlc2gxMjMiLCJhIjoiY2tuZnRobGkwMTl4eTJvb2E1c290cWNnayJ9.dchm9SNc_e5eCZXSq8mG9g'
}).addTo(mymap);

// var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle1 = L.circle([51.508, -0.11], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1.0,
  radius: 100
}).addTo(mymap);

var circle2 = L.circle([51.499035022665936, -0.09861059611213158], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1.0,
  radius: 100
}).addTo(mymap);

var circle3 = L.circle([51.49717127952474, -0.11754843592177597], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1.0,
  radius: 100
}).addTo(mymap);

var circle4 = L.circle([51.502835664137315, -0.1135541585457442], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1.0,
  radius: 100
}).addTo(mymap);

var circle5 = L.circle([51.495992393265084, -0.11531680211903549], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1.0,
  radius: 100
}).addTo(mymap);

var customPopup = `<div class='container '>
                    <div class='row'>
                      <div class='d-flex justify-content-around w-100'>
                        <div class=''>
                          <p class='font-weight-bold m-0'>MOORFIELDS</p>
                          <p class='m-0'>UNITED KINGDOM</p>
                        </div>
                        <div>
                          <img class='img-fluid' src='images/flag_1.png'/>
                        </div>
                      </div> 
                    </div>
                    <div class='row'>
                      <p class='mb-0 ml-auto'>MORE ></p>
                    </div>
                  </div>`;

circle1.bindPopup(
  L.popup().setContent("I am a standalone popup.")
).addTo(mymap);

circle2.bindPopup(
  L.popup().setContent("I am a standalone Circle2 popup.")
).addTo(mymap);

circle3.bindPopup(customPopup);

circle4.bindPopup("I am a circle.");

circle5.bindPopup("I am a circle.");

// var popup = L.popup()
//   .setLatLng([51.499035022665936, -0.09861059611213158])
//   .setContent("I am a standalone popup.")
//   .openOn(mymap);


