window.onload = function(){
	$('#title').fadeIn(2000, function(){
		$('main').prepend('<center><div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp" style="display:none"><div class="mdl-card__title"><h2 class="mdl-card__title-text">¿Que es "Algoritmos MathPy"?</h2></div><div class="mdl-card__supporting-text"><p>Aquí en "Algoritmos MathPy" podrás encontrar una lista con una gran variedad de Algoritmos para la resolución de problemas matemáticos. Todos escritos en el lenguaje de programación, "Python".<br><br> Todos estos algoritmos te ayudaran a resolver problemas que impliquen matemáticas, como también Algoritmos que calculen las propiedades de un problema de Cinemática (Usando formulas de Física), como por ejemplo, "calcular la velocidad final de un cuerpo que cae de una altura de 35 metros", todo esto y más aquí en "Algoritmos MathPy".</p></div></div></center>');
		$('.mdl-card').fadeIn(2000);
	});
}
angular.module('aplicacion', []).controller('searchController', function($scope){
	$scope.lista = [
			];
		var ref = new firebase.database().ref("algoritmos");
		ref.on("child_added", function(snapshot, prevChildKey){
  		var datos = snapshot.val();
  		$('#p2').removeClass('mdl-progress__indeterminate mdl-progress');
   		$scope.$apply(function() {
  			$scope.lista.push({nombre: datos.nombre, urlScript: datos.urlScript});
  		})
		});
});