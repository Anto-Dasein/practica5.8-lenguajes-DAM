fetch('hardware.json')
.then(response => response.json)
.then(data => {
    let lista = document.getElementById("lista")

    for (let componente of data.hardware) {

        almacenarLi = document.getElementById("li"); // Importante poner el elemento NO su id.

        almacenarLi.innerHTML = componente.marca + " - " + componente.tipo + " - " + componente.precio;
        
        (lista).appendChild.almacenarLi;
    }
})