var nombre;
nombre = 'Steven';

var persona = {
    nombre: 'Steven'
};

function saludoPersona(persona) {
    document.getElementById('saludo1').textContent = "Buenos Días " + persona.nombre;
}

function saludo() {
    document.getElementById('saludo2').textContent = "Hola " + nombre;
}

document.addEventListener('DOMContentLoaded', (event) => {
    saludoPersona(persona);
    saludo();
});