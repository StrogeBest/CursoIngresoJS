/* 
Javier Vilchez
Div E
Ejercicio 5 IF
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 17) {
		alert("Usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN