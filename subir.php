
<?php
$formatos = array('.jpg','.png');
if(isset($_POST['subir'])){
	$nombrefile = $_FILES['foto']['name'];
	$nombretmpfile = $_FILES['foto']['tmp_name'];
	$directorio = 'archivos';
	$ext =substr($nombrefile, strrpos($nombrefile, '.'));
	if(in_array($ext, $formatos)){
if (move_uploaded_file($nombretmpfile, "archivos/$nombrefile")) {
	echo "Archivo subido";
}else{
	"no se a podido subir el archivo";
}
	}else{
		echo "No es un archivo permitido";
	}

}

if($dir = opendir($directorio)){
	while ($archivos = readdir($dir)){
		echo "<img src=\"archivos/$archivos\"/>";
	}
}

?>