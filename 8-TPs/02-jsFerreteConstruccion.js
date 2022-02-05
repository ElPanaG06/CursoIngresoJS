/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	largo = parseInt( document.getElementById("txtIdLargo").value);
	ancho = parseInt(document.getElementById("txtIdAncho").value);
    resultado = largo * ancho * 3;
	alert("los metros de alambre a comprar es " + resultado);
}
function Circulo () 
{
    var radio;
	var resultado;
    radio = parseFloat (document.getElementById("txtIdRadio").value)
    resultado = radio * 2 * 3.14 * 3
	alert("los metros de alambre a comprar es " + resultado);
}
function Materiales () 
{
    var largo;
	var ancho;
	var resultadocemento;
    var resultadocal;
	largo = parseInt( document.getElementById("txtIdLargo").value);
	ancho = parseInt(document.getElementById("txtIdAncho").value);
    resultadocemento = largo * ancho * 2;
    resultadocal = largo * ancho * 3;
	alert("las bolsas de cemento son " + resultadocemento);
    alert("las bolsas de cal son " + resultadocal);
	
}