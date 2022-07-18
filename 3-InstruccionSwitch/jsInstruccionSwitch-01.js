/* 
Javier Vilchez
Div E
Ejercicio 1 SWITCH
*/

function mostrar()
{
	let mensaje;
	let mes;

	mes = document.getElementById("txtIdMes").value;
	mensaje = "No ha seleccionado un mes valido";

	switch (mes) {
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN