// Ejemplo de solicitud POST para enviar datos del formulario al backend
fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'example@example.com',
        password: 'password123'
    })
})
.then(response => response.json())
.then(data => {
    // Manejar la respuesta del servidor
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
// Ejemplo de actualización del contenido de un elemento HTML después de recibir datos del servidor
const taskList = document.getElementById('task-list');

fetch('/tasks')
.then(response => response.json())
.then(tasks => {
    // Limpiar la lista de tareas existente
    taskList.innerHTML = '';

    // Agregar nuevas tareas a la lista
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        `;
        taskList.appendChild(li);
    });
})
.catch(error => {
    console.error('Error:', error);
});
