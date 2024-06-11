var productos = [
    {
        nombre: 'Coca-Cola',
        precio: 1.25,
        cantidad: 14
    },
    {
        nombre: 'Pepsi',
        precio: 1.10,
        cantidad: 10
    },
    {
        nombre: 'Sprite',
        precio: 1.00,
        cantidad: 20
    }
];

function mostrarCosto() {
    var contenedor = document.getElementById('productos');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior
    productos.forEach(function(producto) {
        var total = producto.precio * producto.cantidad;
        var productoElemento = document.createElement('p');
        productoElemento.textContent = producto.nombre + ' - Precio: $' + producto.precio.toFixed(2) + ', Cantidad: ' + producto.cantidad + ', Total:' + total.toFixed(2);
        contenedor.appendChild(productoElemento);
    });
}

// Llama a la función mostrarCosto después de que la página haya cargado
document.addEventListener('DOMContentLoaded', (event) => {
    mostrarCosto();
});
