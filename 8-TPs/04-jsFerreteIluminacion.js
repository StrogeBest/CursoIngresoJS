/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 4 IF - SWITCH

4. Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/

function CalcularPrecio () 
{
    // Declaro variables
    let cantidadLamparas;
    let marca;
    let porcentaje;
    let descuento;
    let precioTotal;
    let precioDescuento;
    let impuesto;
    let precioImpuesto;
    let precioFinal;

    let mensaje;
    
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioTotal = cantidadLamparas * 35;

    // PUNTO A
    if (cantidadLamparas >= 6) {
        // Descuento del 50%
        porcentaje = 50;
    }else{
        // PUNTO B
        if (cantidadLamparas == 5) {
            switch (marca) {
                case "ArgentinaLuz":
                    // Descuento del 40%
                    porcentaje = 40;       
                    break;
                default:
                    // Descuento del 30%
                    porcentaje = 30;       
                    break;
            }
        }else{
            // PUNTO C
            if (cantidadLamparas == 4) {
                switch (marca) {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        // Descuento del 25%
                        porcentaje = 25;       
                        break;
                    default:
                        // Descuento del 20%
                        porcentaje = 20;       
                        break;
                }
            }else{
                // PUNTO D
                if (cantidadLamparas == 3) {
                    switch (marca) {
                        case "ArgentinaLuz":
                            // Descuento del 15%
                            porcentaje = 15;       
                            break;
                        case "FelipeLamparas":
                            // Descuento del 10%
                            porcentaje = 10;       
                            break;
                        default:
                            // Descuento del 5%
                            porcentaje = 5;       
                            break;
                    }
                }else{
                    porcentaje = 0;
                }
            }
        }
    }

    descuento = precioTotal * porcentaje / 100;
    precioDescuento = precioTotal - descuento;
    
    // PUNTO E
    if (precioDescuento > 120) {
        // Impuesto del 10%
        impuesto = precioDescuento * 10 / 100;
        precioImpuesto = precioDescuento + impuesto;

        alert("Usted pago " + impuesto + " de IIBB.");

        precioFinal = precioImpuesto;
    }else{ 
        precioFinal = precioDescuento;
    }   

    // Si el precio final es mayor a 1 muestro el precio final
    if (precioFinal > 0) {
        mensaje = precioFinal;
    }else{
        alert("La cantidad de lamparas no puede ser negativo");
        mensaje = "";
    }

    document.getElementById("txtIdprecioDescuento").value = mensaje;
}