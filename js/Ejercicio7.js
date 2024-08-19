/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/

//Funcion de cantidad de numeros negativos
const negativeAmount = (array) =>{
    let negative = 0;
    for(let i = 0; i <= 9; i++){
        if(array[i]<0){
            negative++;
        }
    }
    return negative;
}

//Funcion de cantidad de numeros positivos
const positiveAmount = (array) =>{
    let positive = 0;
    for(let i = 0; i <= 9; i++){
        if(array[i] >= 0){
            positive++;
        }
    }
    return positive;
}

//Funcion de cantidad de numeros multiplos de 5
const fiveAmount = (array) =>{
    let fiveMultiple = 0;
    for(let i = 0; i <= 9; i++){
        if(array[i] % 5 === 0){
            fiveMultiple++;
        }
    }
    return fiveMultiple;
}

//Funcion de suma de pares
const pairTotal = (array) =>{
    let pairSum = 0;
    for(let i = 0; i < 10; i++){
        if(array[i] % 2 === 0){
            pairSum += array[i];
        }
    }
    return pairSum;
}

//Declaracion de Array
let array = new Array(10);

//Llenado de array
for(let i = 0; i<=9; i++){
    array[i] = parseInt(prompt(`(${i + 1}) Ingrese un numero:`));
}

//Impresion
console.log(array);
console.log(`La cantidad de valores negativos ingresados es: ${negativeAmount(array)}`);
console.log(`La cantidad de valores positivos ingresados: ${positiveAmount(array)}`);
console.log(`La cantidad de múltiplos de 15: ${fiveAmount(array)}`);
console.log(`El valor acumulado de los números ingresados que son pares: ${pairTotal(array)}`);

