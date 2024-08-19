/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%*/

//Generar numeros aleatorios para probar
const random = () =>{
    return Math.floor(Math.random() * 10) + 1;
}

const finalGrade = (exam, homework, asistence, investigation) =>{
    return ((exam * 0.2) + (homework * 0.4) + (asistence * 0.1) + (investigation * 0.3)).toFixed(2);
}

let exam = random();
let homework = random();
let asistence = random();
let investigation = random();

console.log(`Examen: ${exam}, Tareas: ${homework}, Asitencia: ${asistence}, Investigacion: ${investigation}`)
console.log(`Su nota final es: ${finalGrade(exam, homework, asistence, investigation)}`);
