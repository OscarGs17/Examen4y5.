const gameBoard = document.getElementById('game-board');
function agregarPelicula() {
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const año = document.getElementById("año").value;

    if (titulo && genero && año) {
        const nuevaCarta = document.createElement('div');
        nuevaCarta.className = 'card';
        nuevaCarta.dataset.framework = titulo.toLowerCase().replace(/\s/g, '');
        nuevaCarta.innerHTML = `<img class="front" src="imagenes/pelicula11.jpg" alt="${titulo}">
                                <img class="back" src="imagenes/${titulo.toLowerCase().replace(/\s/g, '')}.jpg" alt="Reverso de la carta"> boton=contenedor`;

        gameBoard.appendChild(nuevaCarta);
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
function quitarPelicula() {
    const titulo = document.getElementById("titulo").value;
    const cartas = document.querySelectorAll('.card');
    
    cartas.forEach(carta => {
        if (carta.dataset.framework === titulo.toLowerCase().replace(/\s/g, '')) {
            carta.remove();
        }
    });
}

