/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.*/

const higher = (n1, n2) =>{

    if(n1 > n2){
        return `${n1} es el numero mayor`;
    }
    else if(n2 > n1){
        return `${n2} es el numero mayor`;
    }
    else{
        return `Ambos numeros son iguales`;
    }
}

let number1 = parseInt(prompt('Ingrese el primer número'), 10);
let number2 = parseInt(prompt('Ingrese el segundo número'), 10);

console.log(number1, number2);

console.log(higher(number1, number2));