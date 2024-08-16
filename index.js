function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;

    // Generar los valores RGB
    const red = o(r() * s);
    const green = o(r() * s);
    const blue = o(r() * s);

    // Convertir RGB a hex
    const hexColor = rgbToHex(red, green, blue);

    // Generar el valor RGBA
    const rgbaColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + 1 + ')';
    const rgbaLabel = red + ',' + green + ',' + blue + ',' + 1

    // Devolver ambos valores en un objeto
    return {
        rgba: rgbaColor,
        hex: hexColor,
        red: red,
        green: green,
        blue: blue,
        rgbaLabel: rgbaLabel
    };
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
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
    box.style.backgroundColor = color.rgba;

    // Obtener el tamaño del contenedor y el cuadrado
    const contenedorWidth = window.screen.availWidth
    const contenedorHeight = window.innerHeight
    const boxSize = 150; // Tamaño del cuadrado (ajusta esto según tu diseño)


    //.replace('rgba(', '').replace(')', '')
    box.addEventListener('mouseenter', function(){
        const colorInfo = `
            <div class="color-info">
                <p><b>RGBA:</b></p>
                <p>${color.rgbaLabel}</p>
                <p><b>Hex:</b></p>
                <p>${color.hex}</p>
            </div>
        `;
        box.innerHTML = colorInfo;
    })

    box.addEventListener('mouseleave', function(){
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
}, 50);
