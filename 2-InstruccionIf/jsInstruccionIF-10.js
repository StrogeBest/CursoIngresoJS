/* 
Javier Vilchez
Div E
Ejercicio 10 IF
*/

function mostrar()
{
	let nota;

	nota = Math.floor(Math.random() * 10) + 1;

	console.log(nota);
	if (nota == 9 || nota == 10) {
		alert("Excelente");
	}else{
		if (nota >= 4) {
			alert("Aprobó");
		}else{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN