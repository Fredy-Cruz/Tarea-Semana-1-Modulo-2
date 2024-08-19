/*EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.*/

//Funcion para calcular el descuento
function discount() {
    let car = document.getElementById("selectCar").value;
    let discount = 0;

    if (car === "Ford Fiesta") {
        discount = 5;
    } else if (car === "Ford Focus") {
        discount = 10;
    } else if (car === "Ford Escape") {
        discount = 20;
    } else {
        document.getElementById("result").innerHTML = "Por favor, seleccione un coche.";
        return;
    }

    document.getElementById("result").innerHTML = 
        `El coche seleccionado es ${car} y se aplicará un descuento del ${discount}%.`;
}
