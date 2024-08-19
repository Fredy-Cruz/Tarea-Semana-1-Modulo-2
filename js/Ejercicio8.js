/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

//Funcion para calcular la tabla de multiplicar
const table = (number) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number*i}`);
    }
    return;
}

let number = parseInt(prompt('Ingrese un numero: '));
table(number);
