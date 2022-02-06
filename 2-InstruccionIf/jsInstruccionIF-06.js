function mostrar()
{
	var edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad < 13) {
		alert("sos un niño");
	}
	else if(edad <= 17){
		alert ("sos un adolecente");
		
	
	}
	else if(edad <= 65){
			alert("sos un adultdo");
	}
	else {
				alert ("sos un adulto mayor")
		}

			
		

		
		
}


//FIN DE LA FUNCIÓN