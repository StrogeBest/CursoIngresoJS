/* 
Javier Vilchez
Div E
Ejercicio 9 SWITCH
*/

function mostrar()
{
	// Declaro las variables
	let estacion;
	let destino;
	let precioTotal;
	let precioDescuento;
	let descuento;
	let mensaje;

	precioTotal = 15000;
	// Tomo la estacion del año
	estacion = document.getElementById("txtIdEstacion").value;
	// Tomo el destino
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					// Aumento del 20%
					mensaje = "Usted tiene un aumento del 20%";
					descuento = precioTotal * 20 / 100;
					precioDescuento = precioTotal + descuento;
					break;
				case "Cataratas":
				case "Cordoba":
					// Descuento del 10%
					mensaje = "Usted tiene un descuento del 10%";
					descuento = precioTotal * 10 / 100;
					precioDescuento = precioTotal - descuento;
					break;
				default:
					// Descuento del 20%
					mensaje = "Usted tiene un descuento del 20%";
					descuento = precioTotal * 20 / 100;
					precioDescuento = precioTotal - descuento;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					// Descuento del 20%
					mensaje = "Usted tiene un descuento del 20%";
					descuento = precioTotal * 20 / 100;
					precioDescuento = precioTotal - descuento;
					break;
				case "Cataratas":
				case "Cordoba":
					// Aumento del 10%
					mensaje = "Usted tiene un aumento del 10%";
					descuento = precioTotal * 10 / 100;
					precioDescuento = precioTotal + descuento;
					break;
				default:
					// Aumento del 20%
					mensaje = "Usted tiene un aumento del 20%";
					descuento = precioTotal * 20 / 100;
					precioDescuento = precioTotal + descuento;
					break;
			}
			break;
		default:
			switch (destino) {
				case "Bariloche":
					// Aumento del 10%
					mensaje = "Usted tiene un aumento del 10%";
					descuento = precioTotal * 10 / 100;
					precioDescuento = precioTotal + descuento;
					break;
				case "Cataratas":
					// Aumento del 10%
					mensaje = "Usted tiene un aumento del 10%";
					descuento = precioTotal * 10 / 100;
					precioDescuento = precioTotal + descuento;
					break;
				case "Mar del plata":
					// Aumento del 10%
					mensaje = "Usted tiene un aumento del 10%";
					descuento = precioTotal * 10 / 100;
					precioDescuento = precioTotal + descuento;
					break;
				default:
					// Sin descuento
					mensaje = "No hay descuento";
					precioDescuento = precioTotal;
					break;
			}
			break;
	}

	alert(mensaje);
	alert("Precio final: " + precioDescuento);
}//FIN DE LA FUNCIÓN