/* 
Javier Vilchez
Div E
Ejercicio 3 SWITCH
*/

function mostrar()
{
	let mensaje;
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN