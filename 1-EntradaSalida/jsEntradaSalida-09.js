/* 
Javier Vilchez
Div E
Ejercicio 9 E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/

function mostrarAumento()
{
	let sueldo; 
	let aumento;
	let sueldoTotal;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100;

	sueldoTotal = sueldo + aumento;

	document.getElementById("txtIdResultado").value = sueldoTotal;
}