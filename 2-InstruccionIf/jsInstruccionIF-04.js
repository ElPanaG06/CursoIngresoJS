function mostrar()
{
	var edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	/* estoy adentro del rago
	if (edad >= 13 && edad <= 17){

			alert("sos adolecente");
		
		
	}
	else {
		alert("no sos adolecente");
	}*/
	if(	!(edad <13 || edad >17)	){
		alert ("sos adolecente");
	}
	

}//FIN DE LA FUNCIÓN