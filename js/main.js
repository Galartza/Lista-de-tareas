let numeroDeTarea = 1;
const limiteTareas = 10; // Establece el límite de tareas

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTarea = document.getElementById('nuevaTarea');
    const tarea = nuevaTarea.value;

    // Obtener la cantidad actual de tareas
    const cantidadTareas = document.getElementById('tareas').childElementCount;

    // Verificar si se ha alcanzado el límite de tareas
    if (cantidadTareas >= limiteTareas) {
        alert("¡Has alcanzado el límite de 10 tareas! Debes eliminar una tarea antes de agregar otra.");
        return;
    }

    if (tarea.trim() !== '') {
        // Crear una nueva fila de la tabla
        const nuevaFila = document.createElement('tr');

        // Utilizar el número de la tarea más alto actual o reiniciar si la lista está vacía
        numeroDeTarea = cantidadTareas > 0 ? cantidadTareas + 1 : 1;

        // Columnas de la fila numeros
        const columnaNumero = document.createElement('td');
        columnaNumero.textContent = numeroDeTarea++;
        columnaNumero.style.color = "#f9f7f3";
        columnaNumero.style.textShadow = "1px 1px 2px rgba(0,0,0,0.9)";

        // Columnas de la fila tareas
        const columnaTarea = document.createElement('td');
        columnaTarea.textContent = tarea;

        // Columnas de la fila eliminar tarea
        const columnaEliminar = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "x";
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.title = "Eliminar tarea";
        botonEliminar.onclick = function () {
            eliminarTarea(nuevaFila);
        };

        // Columna para marcar como completada
        const columnaCompletada = document.createElement('td');
        const checkboxCompletada = document.createElement('input');
        checkboxCompletada.type = "checkbox";
        checkboxCompletada.onchange = function () {
            marcarComoCompletada(nuevaFila, checkboxCompletada.checked);
        };

        // Agregar la fila a la tabla
        nuevaFila.appendChild(columnaNumero);
        nuevaFila.appendChild(columnaTarea);
        columnaCompletada.appendChild(checkboxCompletada);
        nuevaFila.appendChild(columnaCompletada);
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

// Función para marcar una tarea como completada
function marcarComoCompletada(fila, completada) {
    if (completada) {
        fila.classList.add("completada");
    } else {
        fila.classList.remove("completada");
    }
}

// Animación del container

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento con ID "container"
    const container = document.getElementById('container');

    // Obtener el input con la clase "nueva-tarea"
    const inputNuevaTarea = document.getElementById('nuevaTarea');

    // Agregar un event listener al input
    inputNuevaTarea.addEventListener('click', () => {
        // Añadir la clase "animar" al elemento con ID "container"
        container.classList.add('animar');
    });
});
