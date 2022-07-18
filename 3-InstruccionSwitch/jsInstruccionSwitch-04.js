/* 
Javier Vilchez
Div E
Ejercicio 4 SWITCH
*/

function mostrar()
{
	let mensaje;
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			mensaje = "28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "30 días.";
			break;
		default:
			mensaje = "31 días";
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN