$(function(){
  function initialize(){
    var tokyo = new google.maps.LatLng(35.689488,139.691706)
  var mapOptions={
    center: tokyo,
    mapTypeId:google.maps.MapTypeId.ROADMAP,/*TERRAIN,*//*HYBRID,*//*SATELLITE,*/  /*ROADMAP,*/
    zoom:10,
    disableDefaultUI:false
  }
  var infoContent = '<h2>東京スカイツリー</h2><p>全高634メートルの自立式鉄塔</p>';
  var infowindow = new google.maps.InfoWindow({
    content:infoContent
  });

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);
  $('div#geocoding > button').on('click',function(){
    $(this).blur();
    var address = $.trim($('div#geocoding > input').val());
    if(address){
      var param = {
        'sensor':false,
        'address':address
      };
      $.ajax({
        type:'GET',
        url:'http://maps.googleapis.com/maps/api/geocode/json',
        data:param
      }).fail(function(data){
        alert('処理中にエラーが生じました');
      }).done(function(data){
        if(data.status == 'OK'){
          var lat = data.results[0].geometry.location.lat;
          var lng = data.results[0].geometry.location.lng;
          /*alert('緯度:' + lat + '/経度:' + lng);*/
          var newLatLng = new google.maps.LatLng(lat,lng);
          map.setZoom(16);
          map.setCenter(newLatLng);
        }
      });
    }else{
      alert('住所がありません');
    }
    return false;
  });
  /*矩形
  var mapBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(35.65858,139.745433),
    new google.maps.LatLng(35.710063,139.8107)
  );
  var rectangle = new google.maps.Rectangle({
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWegiht:2,
    fillColor:"#FF0000",
    fillOpacity:0.35,
    bounds:mapBounds
  });
  rectangle.setMap(map);
  */
  /*円の作成
  var circle = new google.maps.Circle({
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWegiht:2,
    fillColor:"#FF0000",
    fillOpacity:0.35,
    center:tokyo,
    radius:100000
  });
  circle.setMap(map);
  */
  /*ポリゴンの緯度経度設定
  var polygonPaths = [
    new google.maps.LatLng(35.681382,139.766084),
    new google.maps.LatLng(34.702485,135.495951),
    new google.maps.LatLng(36.578273,136.647763),
    new google.maps.LatLng(36.643,138.188686)
  ];
  var cities = new google.maps.Polygon({
    path:polygonPaths,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWegiht:2,
    fillColor:"#884411",
    fillOpacity:0.35
  });
  cities.setMap(map);
  */
  /*ポリラインの緯度経度設定
  var linePath = [
    new google.maps.LatLng(35.681382,139.766084),
    new google.maps.LatLng(34.702485,135.495951),
  ];
  var Line = new google.maps.Polyline({
    path:linePath,
    strokeColor:"#FF0000",
    strokeOpacity:1.0,
    strokeWegiht:5
  });
  Line.setMap(map);
  */
/*
  マーカーの設定
  var marker_icon = 'Tulips.png';
  var marker = new google.maps.Marker({
    position:skytree,
    title:"電波塔",
    //icon:marker_icon
  })
  google.maps.event.addListener(marker,'click',function(){
    infowindow.open(map,marker);
  })
  marker.setMap(map);
*/
}
initialize();
});
