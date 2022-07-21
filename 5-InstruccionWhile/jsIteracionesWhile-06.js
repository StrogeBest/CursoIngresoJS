/* 
Javier Vilchez
Div E
Ejercicio 6 WHILE
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador < 5) {
		contador++;
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN