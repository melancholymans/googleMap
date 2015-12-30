$(function(){
  function initialize(){
    var skytree = new google.maps.LatLng(35.710057714926265,139.81071829999996)
  var mapOptions={
    center: skytree,
    mapTypeId:google.maps.MapTypeId.ROADMAP,/*TERRAIN,*//*HYBRID,*//*SATELLITE,*/  /*ROADMAP,*/
    zoom:15,
    disableDefaultUI:false
  }
  var infoContent = '<h2>東京スカイツリー</h2><p>全高634メートルの自立式鉄塔</p>';
  var infowindow = new google.maps.InfoWindow({
    content:infoContent
  });

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);
  var marker_icon = 'Tulips.png';
  var marker = new google.maps.Marker({
    position:skytree,
    title:"電波塔",
    //icon:marker_icon
  })
  google.maps.event.addListener(marker,'click',function(){
    infowindow.open(map,marker);
  })
  //marker.setMap(map);
  //marker.setMap(null);
}
initialize();
});
