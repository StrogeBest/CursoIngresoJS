/*
Javier Vilchez
Div E
Ejercicio 3 WHILE

al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while (claveIngresada != "utn750") {
		claveIngresada = prompt("La clave ingresada es incorrecta. Ingrese el numero clave");
	}	
}//FIN DE LA FUNCIÓN
