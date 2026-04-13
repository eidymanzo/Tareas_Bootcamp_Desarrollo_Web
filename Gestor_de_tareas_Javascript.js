let tareas = [] //Creo la variable tareas
function createTask(title, priority) {  //Creo la función: Crear tareas con un título y una prioridad
    if(priority >=1 && priority <=5){

    

    const tarea = { title, priority, done: false }; //Creo el objeto
    tareas.push(tarea) //Guardo el objeto en el array
}
}

function showTasks(priority) {

    tareas.forEach((tarea) => {
        if (priority === undefined) {
            console.log(tarea);
        } else {
            if (tarea.priority === priority) {
                console.log(tarea);
            }
        }
    });
}

createTask("Ver tutorial de tema nuevo", 3);
createTask("Repasar los contenidos", 5);
createTask("Practicar con ejercicios", 2);
createTask("Hacer anotaciones de ideas importantes", 4);
createTask("Ver clase", 5);
createTask("Comprender los puntos de la teoría", 1)

showTasks();

