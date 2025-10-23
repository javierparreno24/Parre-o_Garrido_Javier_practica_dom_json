document.addEventListener('DOMContentLoaded', () => {
    //Ejercicio 1
    const h1Titulo = document.getElementById('titulo-dom');

    if (h1Titulo) {
        h1Titulo.textContent = '¡DOM Accedido con éxito! (getElementById)';
    }
    const parrafoColor = document.getElementById('parrafo-color');


    if (parrafoColor) {
        parrafoColor.style.color = 'blue';
    }
    //Ejercicio 2
    const textos = document.getElementsByClassName('texto');
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.backgroundColor = 'lightgray';
    }

    //Ejercicio 3
    const primeraCaja= document.querySelector('.caja');
    if (primeraCaja) {
        primeraCaja.style.border = '2px solid blue';
        primeraCaja.style.padding = '10px';
    }

    //Ejercicio 4
      












});