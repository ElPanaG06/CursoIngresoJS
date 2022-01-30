/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//reserva un lugar en la memoria para usarla en el nombre del usuario 
	let nombre; 
	//esta funcion sirve para traer un archivo de .html a .js y el .value es para conseguir el valor de la caja de texto de html
	nombre = document.getElementById("txtIdNombre").value;
	//alert funciona para mostrar el mensaje en la ventana emergente
	alert(nombre) 
	// y esta sirve para que cuando el usuario ingrese el nombre y le de aceptar al cuadre de texto como al mesaje emergente, el valor del cuadre de texto se elimine y aparezca (su nombre)
	document.getElementById("txtIdNombre").value = "";
}


