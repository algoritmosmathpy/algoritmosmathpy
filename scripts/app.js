angular.module('aplicacionAlgoritmos', []).controller("controlador", function($scope){
	$scope.algoritmo = [
		
	];
	var ref = new firebase.database().ref("algoritmos");
		ref.on("child_added", function(snapshot, prevChildKey){
  		var datos = snapshot.val();
  		$('#p2').removeClass('mdl-progress__indeterminate mdl-progress');
  		$scope.$apply(function(){
  			$scope.algoritmo.push({name: datos.nombre, info: datos.descripcion, url: datos.url, img: datos.img, ancle: datos.ancle});
  		})
  	});
});
