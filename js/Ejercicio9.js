/*EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

//Celcius a Fahrenheit
const toFahrenheit = (celcius) => {
    return (celcius * (9/5)) + 32 ;
}

//Dar la temperatura
const tempeture = (f) =>{
    if(f >= 14 && f <= 32){
        console.log('Temperatura baja');
    }
    else if(f >= 32 && f <= 68){
        console.log('Temperatura adecuada');
    }
    else if(f >= 68 && f <= 96){
        console.log('Temperatura alta');
    }
    else{
        console.log('Temperatura desconocida');
    }
}

let celcius = parseInt(prompt('Introduzca la temperatura en Celcius: '));
let fahrenheit = toFahrenheit(celcius).toFixed(2);
console.log(`La temperatura en Fahrenheit es: ${toFahrenheit(celcius).toFixed(2)}`)
tempeture(fahrenheit);

