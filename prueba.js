// Seleccionar el método GET (con la función fetch si no especificamos PUT POST o DELETE, el método GET viene por defecto)
// Pasar la URL http://localhost:8080/movies

fetch("http://localhost:8282/movies")
.then((respuesta) => { // Parsear la respuesta a JSON
    return respuesta.json()
})
.then((moviesData) => {
    // Donde lo queremos imprimir en el HTML
    let moviesListUlElement = document.getElementById('moviesList')

    for(let i = 0; i < moviesData.lenght; i++) {
        // Dentro ul, en elemento voy a imprimir el nombre de movie
        let elementoNuevo = document.createElelement('li');
        // Que texto poner dentro de li
        // elementoNuevo.innerHtml = moviesData[i].title;
        // Añadir el elemento li al elemento ul
        moviesListUlElement.innerHTML += elementoNuevo;
    }
})
.catch((err) => ) {

}