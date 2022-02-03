/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var inporte;
	var inportefinal;
	var descuento; 
	inporte = parseFloat(document.getElementById("txtIdImporte").value);
	descuento = inporte * 25 / 100;
	inportefinal  = inporte - descuento;
	document.getElementById("txtIdResultado").value = inportefinal;

}
