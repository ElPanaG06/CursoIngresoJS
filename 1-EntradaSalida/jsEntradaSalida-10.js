/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*var importe;
	var importefinal;
	var descuento; 
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	descuento = importe * 25 / 100;
	importefinal  = importe - descuento;
	document.getElementById("txtIdResultado").value = importefinal;*/
	var importe;
	var importefinal;
	var descuento;
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	descuento = parseFloat(prompt("ingrese su descuento"));
	importefinal = importe - (importe * descuento / 100);
	alert("tu importe es " + importe + " tu descuento es " + descuento + " tu importe final es " + importefinal )
	


}
