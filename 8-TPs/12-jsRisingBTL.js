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
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	// PUNTO A
	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);
	while (edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = prompt("ERROR, Ingrese su edad entre 18 y 90");
	}
	// Muestro la edad ingresada
	document.getElementById("txtIdEdad").value = edadIngresada;
	
	// PUNTO B
	sexoIngresado = prompt("Ingrese su sexo m(masculino) o f(femenino)");
	while (sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("ERROR, Ingrese su sexo m(masculino) o f(femenino)");
	}
	// Muestro el sexo
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
	// PUNTO C
	estadoCivilIngresado = prompt("Ingrese su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
		estadoCivilIngresado = prompt("ERROR, Ingrese su estado civil: 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");
	}
	// Muestro el estado civil
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	
	// PUNTO D
	sueldoIngresado = prompt("Ingrese su sueldo");
	sueldoIngresado = parseInt(sueldoIngresado);
	while (sueldoIngresado < 8000) {
		sueldoIngresado = prompt("ERROR. El sueldo debe ser mayor a 8000, ingrese su sueldo");
	}
	// Muestro el sueldo
	document.getElementById("txtIdSueldo").value = sueldoIngresado;
	
	// PUNTO E
	legajoIngresado = prompt("Ingrese el numero de legajo (4 cifras)");
	legajoIngresado = parseInt(legajoIngresado);
	while (legajoIngresado < 1000) {
		legajoIngresado = prompt("ERROR, Ingrese el numero de legajo (4 cifras)");
	}
	// Muestro el legajo
	document.getElementById("txtIdLegajo").value = legajoIngresado;
	
	// PUNTO F
	nacionalidadIngresada = prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N") {
		nacionalidadIngresada = prompt("ERROR. Ingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
	}
	// Muestro la nacionalidad
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}