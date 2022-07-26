/*
Javier Vilchez
Div E
Trabajo Practico Ejercicio 12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
	12.   Los datos requeridos son los siguientes:
		A.	Edad, entre 18 y 90 años inclusive.
		B.	Sexo, “M” para masculino y “F” para femenino
		C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
		D.	Sueldo bruto, no menor a 8000.
		E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
		F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/

function ComenzarIngreso () 
{
 	// Definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	// PUNTO A
	edadIngresada = parseInt(prompt("Ingrese su edad entre 18 y 90"));
	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = parseInt(prompt("ERROR. Ingrese su edad entre 18 y 90"));
	}
	
	// PUNTO B
	sexoIngresado = prompt("Ingrese su sexo m(masculino) o f(femenino)");
	while (sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("ERROR. Ingrese su sexo m(masculino) o f(femenino)");
	}
	
	// PUNTO C
	estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo"));
	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
		estadoCivilIngresado = parseInt(prompt("ERROR. Ingrese su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo"));
	}
	
	// PUNTO D
	sueldoIngresado = parseInt(prompt("Ingrese su sueldo (mayor a 8000)"));
	while (isNaN(sueldoIngresado) || sueldoIngresado < 8000) {
		sueldoIngresado = parseInt(prompt("ERROR. Ingrese su sueldo (mayor a 8000)"));
	}
	
	// PUNTO E
	legajoIngresado = parseInt(prompt("Ingrese el numero de legajo (4 cifras)"));
	while (legajoIngresado < 1000 || legajoIngresado > 9999) {
		legajoIngresado = parseInt(prompt("ERROR. Ingrese el numero de legajo (4 cifras)"));
	}
	
	// PUNTO F
	nacionalidadIngresada = prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N") {
		nacionalidadIngresada = prompt("ERROR. Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoIngresado;
	document.getElementById("txtIdLegajo").value = legajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}