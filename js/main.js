let numeroDeTarea = 1;

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTarea = document.getElementById('nuevaTarea');
    const tarea = nuevaTarea.value;

    if (tarea.trim() !== '') {
        // Crear una nueva fila de la tabla
        const nuevaFila = document.createElement('tr');

        // Obtener la cantidad actual de tareas
        const cantidadTareas = document.getElementById('tareas').childElementCount;

        // Utilizar el número de la tarea más alto actual o reiniciar si la lista está vacía
        numeroDeTarea = cantidadTareas > 0 ? cantidadTareas + 1 : 1;

        // Columnas de la fila
        const columnaNumero = document.createElement('td');
        columnaNumero.textContent = numeroDeTarea++;

        const columnaTarea = document.createElement('td');
        columnaTarea.textContent = tarea;

        const columnaEliminar = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "x";
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.title = "Eliminar tarea";
        botonEliminar.onclick = function () {
            eliminarTarea(nuevaFila);
        };

        // Agregar la fila a la tabla
        nuevaFila.appendChild(columnaNumero);
        nuevaFila.appendChild(columnaTarea);
        columnaEliminar.appendChild(botonEliminar);
        nuevaFila.appendChild(columnaEliminar);

        // Agregar la fila al cuerpo de la tabla
        document.getElementById('tareas').appendChild(nuevaFila);

        // Limpiar el input
        nuevaTarea.value = '';
    }
}

// Función para eliminar una tarea
function eliminarTarea(fila) {
    document.getElementById('tareas').removeChild(fila);

    // Actualizar los números de las tareas después de la eliminación
    const filas = document.getElementById('tareas').getElementsByTagName('tr');
    for (let i = 0; i < filas.length; i++) {
        filas[i].getElementsByTagName('td')[0].textContent = i + 1;
    }

    // Actualizar el número de tarea más alto cuando la lista está vacía
    if (filas.length === 0) {
        numeroDeTarea = 1;
    }
}