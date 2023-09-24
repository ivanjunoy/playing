function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createBox() {
    const contenedor = document.querySelector('.contenedor');
    
    const box = document.createElement('div');
    box.classList.add('box')

    box.style.backgroundColor = random_rgba();
    
    contenedor.appendChild(box)
}


const intervalo = setInterval(() => {
    createBox()   
}, 0)

document.body.addEventListener('click', function() {clearInterval(intervalo)});

/* for (let index = 0; index < 1; index++) {
    setInterval(() => {
        createBox()   
    }, 1000)
} */
