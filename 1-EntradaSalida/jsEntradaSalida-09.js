/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var sueldo;
	var nuevosueldo;
	var aumento;
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = sueldo * 10 / 100;
	nuevosueldo = sueldo + aumento;
	document.getElementById("txtIdResultado").value = nuevosueldo;*/
	
	var sueldo;
	var nuevosueldo;
	var aumento;
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = parseInt(prompt("ingrese el aumento")); 
	nuevosueldo = (sueldo * aumento / 100) + sueldo ;
	alert("tu sueldo es " + sueldo + " tu aumento es " + aumento + " tu sueldo final es " + nuevosueldo )

	

	


}
