/*
Javier Vilchez
Div E
Ejercicio 10 E/S

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()
{
	let importe;
	let descuento;
	let importeTotal;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = (25 / 100) * importe;

	importeTotal = importe - descuento;

	alert("Importe: " + importe + ". Descuento: " + descuento + ". Importe total: " + importeTotal);

	document.getElementById("txtIdResultado").value = importeTotal;
}