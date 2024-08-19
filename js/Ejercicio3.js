/*Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/


//Funcion para calcular nuevo salario
const newSalary = (salary, category) =>{

    //Transformar categoria
    cat = category.toUpperCase();
    cat = cat.trim();

    //Calacular nuevo salario
    switch(cat){
        case 'A':
            return (salary + (salary * 0.15)).toFixed(2);
            break;
        case 'B':
            return (salary + (salary * 0.3)).toFixed(2);
            break;
        case 'C':
            return (salary + (salary * 0.1)).toFixed(2);
            break;
        case 'D':
            return (salary + (salary * 0.2)).toFixed(2);
            break;
        default:
            return 'Dato erroneo';
    }
}

//Variables
let name = 'Fredy Cruz'
let salary = 100;
let category = 'C';

console.log(`Nombre: ${name} \n Salario: ${salary} \n Categoria: ${category} \n Nuevo Salario: ${newSalary(salary, category)}`);

