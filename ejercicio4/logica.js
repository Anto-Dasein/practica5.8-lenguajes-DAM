fetch('hardware.json')
    .then(response => response.json())
    .then(data => {
        let lista = document.getElementById("lista");

        for (let componente of data.hardware) {

            let almacenarDiv = document.createElement("div");

            almacenarDiv.textContent = componente.marca + " - " + componente.tipo;
            
            lista.appendChild(almacenarDiv);
        }
    })