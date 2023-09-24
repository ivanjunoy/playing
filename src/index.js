function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createBox() {
    const contenedor = document.querySelector('.contenedor');
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = random_rgba();
    
    // Obtener el tamaño del contenedor y el cuadrado
    const contenedorWidth = window.screen.availWidth
    const contenedorHeight = window.innerHeight
    const boxSize = 50; // Tamaño del cuadrado (ajusta esto según tu diseño)


    // Calcular cuántos cuadrados caben en el contenedor
    const cuadradosPorFila = Math.floor(contenedorWidth / boxSize);
    const cuadradosPorColumna = Math.floor(contenedorHeight / boxSize);
    const cuadradosTotales = cuadradosPorFila * cuadradosPorColumna;

    // Obtener todos los cuadrados existentes
    const cuadradosExistentes = document.querySelectorAll('.box').length;

    // Si no hay más espacio, detener la creación
    if (cuadradosExistentes >= cuadradosTotales) {
        clearInterval(intervalo);
        return;
    }
    
    contenedor.appendChild(box);
}

const intervalo = setInterval(() => {
    createBox();
}, 1);

document.body.addEventListener('click', function() {
    clearInterval(intervalo);
});
