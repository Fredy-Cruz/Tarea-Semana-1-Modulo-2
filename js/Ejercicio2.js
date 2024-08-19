/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/

//Generar numeros aleatorios para probar
const random = () =>{
    return Math.floor(Math.random() * 10) + 1;
}

//Calcular Nota final
const finalGrade = (exam, homework, asistence, investigation) =>{
    return ((exam * 0.2) + (homework * 0.4) + (asistence * 0.1) + (investigation * 0.3)).toFixed(2);
}

//Datos del alumno
let name = 'Fredy';
let carnet = "AJJNDS0001"

let exam = random();
let homework = random();
let asistence = random();
let investigation = random();

console.log(`Examen: ${exam}, Tareas: ${homework}, Asitencia: ${asistence}, Investigacion: ${investigation}`)
console.log(`Nombre: ${name}, Carnet: ${carnet}, Nota final es: ${finalGrade(exam, homework, asistence, investigation)}`);
