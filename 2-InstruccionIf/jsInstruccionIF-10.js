function mostrar()
{
	var numero;
	numero = Math.round(Math.random() * 9 + 1);
	if (numero >= 9){
		alert(numero + " Excelente");

	}
	else if ( numero < 4){
		alert (numero + " Vamos, la proxima se puede");

	}
	else {
		alert (numero + " Aprobó ")
	}

}//FIN DE LA FUNCIÓN