function mostrar()
{
	let mensaje;
	let hora;
	hora = parseInt(document.getElementById("txtIdHora").value);

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN