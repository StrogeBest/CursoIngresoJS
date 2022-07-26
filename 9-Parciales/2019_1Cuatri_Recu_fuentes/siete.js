/* 
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500), sabor validar(carne vegetales pollo) e informar por alert:
    a) El promedio de los kilos totales.
    b) El mas liviano y su sabor
    c) La cantidad de sabor carne y el promedio de kilos de sabor carne
*/

function mostrar()
{
    // Declaro variables
    let kilos;
    let sabor;

    let acumuladorKilos = 0; 
    let promedioKilos;
    let masLiviano;
    let saborMasLiviano;
    let cantidadSaborCarne = 0;
    let acumuladorSaborCarne = 0;
    let promedioSaborCarne;

    let bandera = 0;

    for (let i = 0; i < 10; i++) {
        // Pido datos
        kilos = parseInt(prompt("Ingrese los kilos (entre 0 y 500)"));
        while (kilos < 0 || kilos > 500) {
            kilos = parseInt(prompt("ERROR. Ingrese los kilos (entre 0 y 500)"));
        }

        sabor = prompt("Ingrese el sabor (carne, vegetales o pollo)");
        while (sabor != "carne" && sabor != "vegetales" && sabor != "pollo") {
            sabor = prompt("ERROR. Ingrese el sabor (carne, vegetales o pollo)"); 
        }

        // PUNTO A
        acumuladorKilos = acumuladorKilos + kilos;
    
        // PUNTO B
        if (!bandera) {
            masLiviano = kilos;
            saborMasLiviano = sabor;
            bandera = 1;
        }else{
            if (kilos < masLiviano) {
                masLiviano = kilos;
                saborMasLiviano = sabor;
            }
        }

        // PUNTO C
        if (sabor == "carne") {
            acumuladorSaborCarne = acumuladorSaborCarne + kilos;
            cantidadSaborCarne++;
        }
    }

    promedioKilos = acumuladorKilos / 10;
    promedioSaborCarne = acumuladorSaborCarne / cantidadSaborCarne;

    alert("A- Promedio de kilos totales: " + promedioKilos);
    alert("B- Bolsa de alimento mas liviana: " + masLiviano + ", El sabor es: " + saborMasLiviano);
    alert("C- Promedio de kilos de alimento sabor carne: " + promedioSaborCarne + ", Cantidad de alimento sabor carne: " + cantidadSaborCarne);
}
