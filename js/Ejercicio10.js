/*EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

//Lenar cada arreglo
const fillArray = (array, turn) => {
    for(let i = 0; i < array.length; i++){
        array[i] = parseInt(prompt(`Ingrese la edad numero ${i + 1} del turno de ${turn}: `))
    }
    return array;
}

//Calcular promedio de edades
const avarageAge = (array, turn) =>{
    let avarage = 0
    for(let i = 0; i < array.length; i++){
        avarage += array[i];
    }
    avarage = (avarage/array.length).toFixed(2);
    
    return avarage;
}

//Imprimir Promedios
const showAvarage = (avarage, turn) =>{
    console.log(`El promedio de edades para el turno de ${turn} es ${avarage}`);
}

//Mostrar mayor promedio
const maxAvarage = (morAv, eveAv, nigAv) =>{
    if(morAv > eveAv && morAv > nigAv){
        alert('El turno de la mañana tiene el promedio de edad mas grande');
    }
    else if(eveAv > morAv && eveAv > nigAv){
        alert('El turno de la tarde tiene el promedio de edad mas grande');
    }
    else if(nigAv > morAv && nigAv > eveAv){
        alert('El turno de la noche tiene el promedio de edad mas grande');
    }
    else{
        alert('Hay empate en el mayor promedio de edad');
    }
}

//Declaracion de arrays
let morning = new Array(5);
let evening = new Array(6);
let night = new Array(11);

//Invocar funcion de llenado
fillArray(morning, 'mañana');
fillArray(evening, 'tarde');
fillArray(night, 'noche');

//mostrar array
console.log(morning);
console.log(evening);
console.log(night);

//Invocar funcion de promedio
morningAvarage = avarageAge(morning, 'mañana');
eveningAvarage = avarageAge(evening, 'tarde');
nightAvarage = avarageAge(night, 'noche');

//Invocar funcion de imprimir promedios
showAvarage(morningAvarage, 'mañana');
showAvarage(eveningAvarage, 'tarde');
showAvarage(nightAvarage, 'noche');

//Invocar Funcion de mayor promedio
maxAvarage(morningAvarage, eveningAvarage, nightAvarage);




