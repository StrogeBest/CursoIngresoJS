/*
Javier Vilchez
Div E
Ejercicio 8 WHILE

Al presionar el botón pedir  números  hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt("¿Desea continuar? si/no");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN