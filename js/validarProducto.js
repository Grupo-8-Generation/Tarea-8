function validarYCrearProducto() {
    // Obtener referencias a los campos del formulario
    let nombreInput = document.getElementById('nombre');
    let imagenInput = document.getElementById('imagen');
    let descripcionInput = document.getElementById('descripcion');

    // Obtener los valores ingresados por el usuario
    let nombre = nombreInput.value.trim();
    let imagen = imagenInput.value.trim();
    let descripcion = descripcionInput.value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '' || imagen === '' || descripcion === '') {
        // Mostrar alerta de Bootstrap si algún campo está vacío
        showAlert('Todos los campos son requeridos', 'danger');
        return;
    }

    // Crear el nuevo objeto de producto
    let nuevoProducto = {
        name: nombre,
        imgSrc: imagen,
        description: descripcion
    };

    // Agregar el nuevo producto al objeto cafeProducts
    // Aquí deberías decidir en qué galería agregar el nuevo producto, 
    // por ejemplo, puedes preguntar al usuario o utilizar lógica predefinida
    cafeProducts.gallery1.push(nuevoProducto);

    // Limpiar los campos del formulario después de agregar el producto
    nombreInput.value = '';
    imagenInput.value = '';
    descripcionInput.value = '';

    // Mostrar una alerta de éxito
    showAlert('Producto creado exitosamente', 'success');

    // Imprimir el objeto en la consola (opcional)
    console.log(nuevoProducto);
}

// Función para mostrar alertas de Bootstrap
function showAlert(message, type) {
    // Crear el elemento de alerta
    let alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;

    // Insertar el elemento de alerta en el DOM
    let container = document.querySelector('.container');
    container.insertBefore(alertDiv, document.getElementById('productoForm'));

    // Desaparecer la alerta después de 3 segundos
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}
