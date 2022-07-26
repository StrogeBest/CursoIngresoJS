/* 
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar) la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de temperaturas pares.
    b) El nombre del pais con menos habitantes
    c) la cantidad de paises que superan los 40 grados.
    d) el promedio de habitantes entre los paises ingresados
    f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
    // Declaro variables
    let nombrePais;
    let cantidadHabitantes;
    let temperatura;

    let cantidadTemperaturaPar = 0;
    let nombrePaisMenosHabitantes;
    let menosCantidadHabitantes;
    let cantidadPaisesMayor40Grados = 0;
    let acumuladorHabitantes = 0;
    let cantidadPaises = 0;
    let promedioHabitantes;
    let temperaturaMinima;
    let nombrePaistemperaturaMinima;

    let bandera = 0;
    let respuesta = true;

    while (respuesta) {
        // Pido datos
        nombrePais = prompt("Ingrese el nombre del pais");

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes (entre 1 y 7000)"));
        while (cantidadHabitantes < 1 || cantidadHabitantes > 7000) {
            cantidadHabitantes = parseInt(prompt("ERROR. Ingrese la cantidad de habitantes (entre 1 y 7000)"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura (entre -50 y 50)"));
        while (temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt("ERROR. Ingrese la temperatura (entre -50 y 50)"));
        }

        // PUNTO A
        if (temperatura % 2 == 0) {
            cantidadTemperaturaPar++;
        }

        // PUNTO B
        if (!bandera) {
            nombrePaisMenosHabitantes = nombrePais;
            menosCantidadHabitantes = cantidadHabitantes;

            temperaturaMinima = temperatura;
            nombrePaistemperaturaMinima = nombrePais;
            
            bandera = 1;
        }else{
            if (cantidadHabitantes < menosCantidadHabitantes) {
                nombrePaisMenosHabitantes = nombrePais;
                menosCantidadHabitantes = cantidadHabitantes;
            }

            // PUNTO F
            if (temperatura < temperaturaMinima) {
                temperaturaMinima = temperatura;
                nombrePaistemperaturaMinima = nombrePais;
            }
        }

        // PUNTO C
        if (temperatura > 40) {
            cantidadPaisesMayor40Grados++;
        }

        // PUNTO D
        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
        cantidadPaises++;

        respuesta = confirm("¿Desea continuar?");
    }

    promedioHabitantes = acumuladorHabitantes / cantidadPaises;

    document.write(
        "A- Cantidad de temperaturas pares: " + cantidadTemperaturaPar + "<br>" +
        "B- Nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>" +
        "C- Cantidad de paises que superan los 40 grados: " + cantidadPaisesMayor40Grados + "<br>" +
        "D- Promedio de habitantes entre los paises ingresados: " + promedioHabitantes + "<br>" +
        "F- Temperatura minima: " + temperaturaMinima + "<br>" +
        "Nombre del pais con la temperatura minima: " + nombrePaistemperaturaMinima
    );
}
