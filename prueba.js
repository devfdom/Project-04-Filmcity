fetch('http://localhost:8282/movies')
.then((respuesta) => { // Parsear los datos a JSON
    return respuesta.json();
})
.then((moviesData) => {
    // Donde lo queremos imprimir en el HTML
    let moviesListUlElement = document.getElementById('moviesList')
    
    for(let i = 0; i < 3; i++){
        // Dentro ul, en elemento voy a imprimir el nombre de movie
        let elementoNuevo = `<li class="ejemplo"><span style="color: red;">${moviesData[i].title}</span></li>`;
        // Que texto poner dentro del li
        // elementoNuevo.innerHTML = moviesData[i].title;
        // Añadir el elemento li al elemento ul
        //moviesListUlElement.appendChild(elementoNuevo);
        moviesListUlElement.innerHTML += elementoNuevo;
    }
})
.catch((err) => {
    console.log(err);
})

