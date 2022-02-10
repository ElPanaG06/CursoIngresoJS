function mostrar()
{
	var mes;  
	mes = document.getElementById("txtIdMes").value;
	switch (mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert( "Ya pasamos el frio, ahora calor!!!.");
			break;
		alert("Falta para el invierno.");
			break;
		alert ("Abrigate que hace frio.");
				break;
		}	

}//FIN DE LA FUNCIÓN