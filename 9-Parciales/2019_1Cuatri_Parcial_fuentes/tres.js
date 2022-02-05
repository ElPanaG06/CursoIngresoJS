function mostrar()
{
    var precio;
    var descuento;
    var resultado;
    precio = parseInt(prompt("ingrese el precio"));
    descuento = parseInt(prompt("ingrese el porcentaje de descuento"));
    resultado = precio - (precio * descuento / 100);
    document.getElementById("elPrecioFinal").value = resultado;




}
