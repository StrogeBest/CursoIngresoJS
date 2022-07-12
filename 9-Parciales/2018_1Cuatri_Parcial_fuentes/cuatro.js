/* 
Javier Vilchez
Div E
Ejercicio 4 Parcial 2018
*/

function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");

    if (numeroUno == numeroDos) {
        alert(numeroUno + numeroDos);
    }else{
        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);
        
        if (numeroUno > numeroDos) {
            resultado = numeroUno - numeroDos;
            alert(resultado)   
        }else{
            resultado = numeroUno + numeroDos;
            alert(resultado)   
            
            if (resultado > 10) {
                alert("La suma es " + resultado + " y supero 10")   
            }
        }
    }
}