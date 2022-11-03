// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

const movieContainer = document.getElementById('peliculas');

//mostrar data de peliculas
data.films.forEach(film =>{
    const peliculas = `<div class="container"> <div class="cajitasFrente">
    <img class="posters" src="${film.poster}" width="157" height="202"></img>
    <p class="titulos">${film.title}</p></div></div>
    <div class="cajitasAtras"><p class="textos">${film.description}"</p>
    <p class="textos">Director: ${film.director}</p>
    <p class="textos">Producer: ${film.producer}</p>
    <p class="textos"> Year: ${film.release_date}</p>
    <p class="textos tarjetas">Score: ${film.rt_score}</p></div></div>`
    movieContainer.insertAdjacentHTML('beforeend', peliculas)
    });