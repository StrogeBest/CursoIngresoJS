/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 4 IF

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
    let cantidadLamparas;
    let marca;
    let descuento;
    let precioTotal;
    let precioDescuento;
    let impuesto;
    let precioImpuesto;
    
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioTotal = cantidadLamparas * 35;

    // PUNTO A
    // Si la cantidad de lamparas es igual o mayor a 6 entra al codigo
    if (cantidadLamparas >= 6) {
        // Descuento
        descuento = precioTotal * 50 / 100;
        // Precio con descuento
        precioDescuento = precioTotal - descuento;

        // PUNTO E
        // Si el precio con descuento es igual o mas que 120 aplico un impuesto del 10%
        if (precioDescuento >= 120) {
            // Impuesto del 10%
            impuesto = precioDescuento * 10 / 100;
            // Precio final con impuesto incluido
            precioImpuesto = precioDescuento + impuesto;

            alert("Usted pago " + impuesto + " de IIBB.");
            document.getElementById("txtIdprecioDescuento").value = precioImpuesto;
        }else{
            // Como el precio con descuento no es mayor o igual a 120 solo muestro el precio con descuento
            document.getElementById("txtIdprecioDescuento").value = precioDescuento;
        }
    }
    
    // PUNTO B
    if (cantidadLamparas == 5) {
        // Si la marca es "ArgentinaLuz" hago un descuento del 40%
        if (marca == "ArgentinaLuz") {
            // Descuento
            descuento = precioTotal * 40 / 100;
            // Precio con descuento
            precioDescuento = precioTotal - descuento;
        
            // PUNTO E
            // Si el precio con descuento es igual o mas que 120 aplico un impuesto del 10%
            if (precioDescuento >= 120) {
                // Impuesto del 10%
                impuesto = precioDescuento * 10 / 100;
                // Precio final con impuesto incluido
                precioImpuesto = precioDescuento + impuesto;

                alert("Usted pago " + impuesto + " de IIBB.");
                document.getElementById("txtIdprecioDescuento").value = precioImpuesto;
            }else{
                // Como el precio con descuento no es mayor o igual a 120 solo muestro el precio con descuento
                document.getElementById("txtIdprecioDescuento").value = precioDescuento;
            }
        }else{
            // Como la marca no es "ArgentinaLuz" hago un descuento del 30%
            // Descuento
            descuento = precioTotal * 30 / 100;
            // Precio con descuento
            precioDescuento = precioTotal - descuento;
            
            // PUNTO E
            // Si el precio con descuento es igual o mas que 120 aplico un impuesto del 10%
            if (precioDescuento >= 120) {
                // Impuesto del 10%
                impuesto = precioDescuento * 10 / 100;
                // Precio final con impuesto incluido
                precioImpuesto = precioDescuento + impuesto;

                alert("Usted pago " + impuesto + " de IIBB.");
                document.getElementById("txtIdprecioDescuento").value = precioImpuesto;
            }else{
                // Como el precio con descuento no es mayor o igual a 120 solo muestro el precio con descuento
                document.getElementById("txtIdprecioDescuento").value = precioDescuento;
            }
        }
    }

    // PUNTO C
    if (cantidadLamparas == 4) {
        // Solo se hace un descuento del 25% si la marca es "ArgentinaLuz" o "FelipeLamparas"
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            // Descuento
            descuento = precioTotal * 25 / 100;
            // Precio con descuento
            precioDescuento = precioTotal - descuento;

            // Muestro el mensaje
            document.getElementById("txtIdprecioDescuento").value = precioDescuento;
        }else{
            // Como la marca no es "ArgentinaLuz" o "FelipeLamparas" hago un descuento del 20%
            // Descuento
            descuento = precioTotal * 20 / 100;
            // Precio con descuento
            precioDescuento = precioTotal - descuento;
            
            // Muestro el mensaje
            document.getElementById("txtIdprecioDescuento").value = precioDescuento;
        }
    }

    // PUNTO D
    if (cantidadLamparas == 3) {
        // Si la marca es "ArgentinaLuz" se aplica un descuento del 15%
        if (marca == "ArgentinaLuz") {
            // Descuento
            descuento = precioTotal * 15 / 100;
            // Precio con descuento
            precioDescuento = precioTotal - descuento;
        
            document.getElementById("txtIdprecioDescuento").value = precioDescuento;
        }else{
            // Si la marca es "FelipeLamparas" se aplica un descuento del 10%
            if (marca == "FelipeLamparas") {
                // Descuento
                descuento = precioTotal * 10 / 100;
                // Precio con descuento
                precioDescuento = precioTotal - descuento;
            
                document.getElementById("txtIdprecioDescuento").value = precioDescuento;
            }else{
                // Como no es ninguna de las dos anteriores se aplica un descuento del 5%
                // Descuento
                descuento = precioTotal * 5 / 100;
                // Precio con descuento
                precioDescuento = precioTotal - descuento;
            
                document.getElementById("txtIdprecioDescuento").value = precioDescuento;
            }
        }
    }
}