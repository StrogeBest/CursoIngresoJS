/*
Javier Vilchez
Div E
Ejercicio 9 WHILE

Al presionar el botón pedir  números  hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.
*/

function mostrar()
{	
	// Declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	// Iniciar variables
	banderaDelPrimero = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if (!banderaDelPrimero) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}else{
			// Numero maximo
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			}
			
			// Numero minimo
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}
	
		respuesta=prompt("¿Desea continuar? si/no");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimmo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN