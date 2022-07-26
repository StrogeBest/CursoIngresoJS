/* 
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar), el sexo (validar) y la nota del final (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de varones aprobados
    b) El promedio de notas de los menores de edad
    c) El promedio de notas de los adolescentes.
    d) El promedio de notas de los mayores
    f) El promedio de notas por sexo masculino y femenino
*/

function mostrar()
{
    // Declaro variables
    let nombre;
    let edad;
    let sexo;
    let nota;

    let cantidadVaronesAprobados = 0;
    let acumuladorNotasMenoresEdad = 0;
    let cantidadMenoresEdad = 0;
    let promedioNotasMenoresEdad;
    let acumuladorNotasAdolescenteEdad = 0;
    let cantidadAdolescenteEdad = 0;
    let promedioNotasAdolescenteEdad;
    let acumuladorNotasMayoresEdad = 0;
    let acumuladorNotaMasculino = 0;
    let cantidadMasculino = 0;
    let acumuladorNotaFemenino = 0;
    let cantidadFemenino = 0;
    let promedioNotaMasculino;
    let promedioNotaFemenino;

    let respuesta = true;

    while (respuesta) {
        // Pido datos
        nombre = prompt("Ingrese su nombre");

        edad = parseInt(prompt("Ingrese su edad"));
        while (isNaN(edad) || edad <= 0) {
            edad = parseInt(prompt("ERROR. Ingrese su edad"));
        }
        
        sexo = prompt("Ingrese el sexo f(femenino) o m(masculino)");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("ERROR. Ingrese el sexo f(femenino) o m(masculino)");
        }
        
        nota = parseInt(prompt("Ingrese la nota final"));
        while (isNaN(nota) || edad <= 0) {
            nota = parseInt(prompt("ERROR. Ingrese la nota final"));
        }

        // PUNTO A
        if (sexo == "m" && nota >= 6) {
            cantidadVaronesAprobados++;
        }

        // PUNTO B
        if (edad < 18) {
            acumuladorNotasMenoresEdad = acumuladorNotasMenoresEdad + nota;
            cantidadMenoresEdad++;
        }else{
            acumuladorNotasMayoresEdad = acumuladorNotasMayoresEdad + nota;
        }

        // PUNTO C
        if (edad >= 13 && edad <= 17) {
            acumuladorNotasAdolescenteEdad = acumuladorNotasAdolescenteEdad + nota;
            cantidadAdolescenteEdad++;
        }

        // PUNTO F
        if (sexo == "m") {
            acumuladorNotaMasculino = acumuladorNotaMasculino + nota;
            cantidadMasculino++;
        }else{
            acumuladorNotaFemenino = acumuladorNotaFemenino + nota;
            cantidadFemenino++;
        }

        respuesta = confirm("¿Desea continuar?");
    }

    promedioNotasMenoresEdad = acumuladorNotasMenoresEdad / cantidadMenoresEdad;
    promedioNotasAdolescenteEdad = acumuladorNotasAdolescenteEdad / cantidadAdolescenteEdad;

    document.write(
        "A- Cantidad de varones aprobados: " + cantidadVaronesAprobados + "<br>" +
        "B- Promedio de notas de los menores de edad: " + promedioNotasMenoresEdad + "<br>" +
        "C- Promedio de notas de los adolescentes: " + promedioNotasAdolescenteEdad + "<br>" +
        "D- Promedio de notas de los mayores: " + "<br>" +
        "F- Promedio de notas de masculino: " + "<br>" +
        "Promedio de notas femenino: "
    );
}