/* 
Javier Vilchez
Div E
Ejercicio 7 IF
*/

function mostrar()
{
	let edad; 
	let estadoCivil;
	 
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN