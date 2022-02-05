/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
    var calculo1;
    var calculo2;
	var temperaturafinal;
	Fahrenheit = parseFloat( document.getElementById("txtIdTemperatura").value);
    calculo1 = Fahrenheit - 32;
    calculo2 = calculo1 * 5;
    temperaturafinal = calculo2 / 9;

    
	alert("los grados centigrados son " + temperaturafinal );
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var calculo1;
	var temperaturafinal;
	centigrados = parseFloat( document.getElementById("txtIdTemperatura").value);
    calculo1 = centigrados * 1.8;
    temperaturafinal = calculo1 + 32;
     

    
	alert("los grados Fahrenheit son " + temperaturafinal );
}

