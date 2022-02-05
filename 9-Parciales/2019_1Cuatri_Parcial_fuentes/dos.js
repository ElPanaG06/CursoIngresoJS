function mostrar()
{
  var pareja1nombre;
  var pareja1peso;
  var pareja2nombre;
  var pareja2peso;
  var respuestasumapeso;
  var respuestapromediopeso;
  pareja1nombre = prompt("usted se llama? Pareja 1");
  pareja1peso = parseInt(prompt("y pesa?"));
  pareja2nombre = prompt ("usted se llama? Pareja 2");
  pareja2peso = parseInt(prompt("y pesa"));
  respuestasumapeso =  pareja1peso + pareja2peso;
  respuestapromediopeso = respuestasumapeso /2;
  alert("Ustedes se llaman " + pareja1nombre + ' y ' + pareja2nombre + ", pesan " + pareja1peso + " kilos, y " + pareja2peso + " kilos y su promedio de peso es de " + respuestapromediopeso + " kilos" );

  
}
