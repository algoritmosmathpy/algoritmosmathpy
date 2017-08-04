angular.module('aplicacionAlgoritmos', []).controller("controlador", function($scope){
  $scope.algoritmo = [];
  var ref = new firebase.database().ref("algoritmos");
    ref.on("child_added", function(snapshot, prevChildKey){
      var datos = snapshot.val();
      document.querySelector('#spinner').setAttribute("hidden", true);
      setTimeout(function(){$('.mdl-layout__content').fadeIn(2000)}, 1000);
      $scope.$apply(function(){
        $scope.algoritmo.unshift({name: datos.nombre, info: datos.descripcion, url: datos.url, img: datos.img, ancle: datos.ancle, datePublic: datos.date});
      })
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
}
