/* 
Javier Vilchez
Div E
Ejercicio 6 SWITCH
*/

function mostrar()
{
	// Declaro las variables
	let mensaje;
	let hora;

	// Tomo el valor del id y lo transformo a un numero entero
	hora = parseInt(document.getElementById("txtIdHora").value);

	switch (hora) {
		// Entre las 7 a 11
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		// Entre las 12 a 19
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde.";
			break;
		// Entre las 20 a 24 y 0 a 6
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			mensaje = "Es de noche.";
			break;
		default:
			mensaje = "La hora no existe."
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN