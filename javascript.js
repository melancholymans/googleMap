$(function(){
  function initialize(){
  var mapOptions={
    center: new google.maps.LatLng(38.681382,139.766084),
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    zoom:5
  }
  var map = new google.maps.Map(document.getElementById("map"),mapOptions);
}
initialize();
});
