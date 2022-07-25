/*
Javier Vilchez
Div E
Ejercicio 10 WHILE

Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos.
	2-Suma de los positivos.
	3-Cantidad de positivos.
	4-Cantidad de negativos.
	5-Cantidad de ceros.
	6-Cantidad de números pares.
	7-Promedio de positivos.
	8-Promedios de negativos.
	9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/

function mostrar()
{
	// Declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaPositivos = 0;
	let sumaNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadNumeroPar = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivoNegativo;

	respuesta = "si";

	while(respuesta == "si")
	{
		// Pido el numero
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		// PUNTO 5
		if (numeroIngresado == 0) {
			cantidadCeros++;
		}else{
			// PUNTO 2
			if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;

				// PUNTO 3
				cantidadPositivos++;
			}else{
				// PUNTO 1
				sumaNegativos = sumaNegativos + numeroIngresado;

				// PUNTO 4
				cantidadNegativos++;
			}
		}

		// PUNTO 6
		if (numeroIngresado % 2 == 0) {
			cantidadNumeroPar++;
		}

		respuesta = prompt("¿Desea continuar? si/no");
	}//fin del while

	// PUNTO 7
	promedioPositivos = sumaPositivos / cantidadPositivos;
	// PUNTO 8
	promedioNegativos = sumaNegativos / cantidadNegativos;
	// PUNTO 9
	diferenciaPositivoNegativo = sumaPositivos - sumaNegativos;

	document.write(
		"1- La suma de numeros positivos es: " + sumaPositivos + "<br>" +
		"2- La suma de numeros negativos es: " + sumaNegativos + "<br>" +
		"3- La cantidad de numeros positivos es: " + cantidadPositivos + "<br>" +
		"4- La cantidad de numeros negativos es: " + cantidadNegativos + "<br>" +
		"5- La cantidad de ceros es: " + cantidadCeros + "<br>" +
		"6- La cantidad de numeros pares es: " + cantidadNumeroPar + "<br>" +
		"7- El promedio de los numeros positivos es: " + promedioPositivos + "<br>" +
		"8- El promedio de los numeros negativos es: " + promedioNegativos + "<br>" +
		"9- La diferencia entre numeros positivos y negativos es: " + diferenciaPositivoNegativo
	);
}//FIN DE LA FUNCIÓN