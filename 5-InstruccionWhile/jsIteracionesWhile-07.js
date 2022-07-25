/*
Javier Vilchez
Div E
Ejercicio 7 WHILE

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let promedio;
	
	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN