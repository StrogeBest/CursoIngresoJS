function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje = "Norte"
			break;
		case "Cataratas":
			mensaje = "Norte"
			break;
		case "Mar del plata":
			mensaje = "Entre el Sur y Este"
			break;
		default:
			mensaje = "Sur"
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN