/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
	var precioDos;
    var precioTres;
	var resultado;
	precioUno = parseInt( document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;
	alert("la suma es " + resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
    var precioTres;
	var resultado;
    var promedio;
	precioUno = parseInt( document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    resultado = precioUno + precioDos + precioTres;
    promedio = (resultado / 3);
	alert("el promedio es " + promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
    var precioTres;
	var PrecioFinal;
    var Iva;
	precioUno = parseInt( document.getElementById("txtIdPrecioUno").value);
	precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    PrecioFinal = precioUno + precioDos + precioTres;
    Iva = PrecioFinal * 21 / 100 + PrecioFinal;
	alert("el promedio es " + Iva);
}