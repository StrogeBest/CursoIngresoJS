/* 
Javier Vilchez
Div E
Ejercicio 2 IF
*/

function mostrar()
{
	// Declaro la variable
	let edad;

	// Tomo el valor de su id y lo transformo a numero entero
	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Si es mayor de edad muestro el mensaje
	if (edad > 18) {
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN