/* 
Javier Vilchez
Div E
Ejercicio 1 IF
*/

function mostrar()
{
	// Declaro la variable
	let edad;

	// Tomo el valor de su id y lo transformo a numero entero
	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Si la edad es 15 muestro el mensaje
	if (edad == 15) {
		alert("Niña bonita");
	}
}//FIN DE LA FUNCIÓN