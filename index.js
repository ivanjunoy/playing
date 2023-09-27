function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}

function mostrarRgb(color, box){
    console.log('color: ', color);
    console.log('box: ', box);
}

function createBox() {
    const contenedor = document.querySelector('.contenedor');
    const box = document.createElement('div');
    const color = random_rgba();
    box.classList.add('box');
    box.classList.add('zoom');
    box.style.backgroundColor = color;
    // Obtener el tamaño del contenedor y el cuadrado
    const contenedorWidth = window.screen.availWidth
    const contenedorHeight = window.innerHeight
    const boxSize = 50; // Tamaño del cuadrado (ajusta esto según tu diseño)

    box.addEventListener('mouseover', function(){
        box.innerHTML = color;
    })

    box.addEventListener('mouseout', function(){
        box.innerHTML = "";
    })
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

/* document.body.addEventListener('click', function() {
     clearInterval(intervalo); 
    const elemntoBorrar = document.querySelectorAll('.box')

    elemntoBorrar.forEach(item => {
        item.remove()
    })
}); */


/*  
    random box size
    box.style.height = Math.round(Math.random() * 50) + 'px'
    box.style.width = Math.round(Math.random() * 50) + 'px'

    console.log(Math.round(Math.random() * 50));
 */