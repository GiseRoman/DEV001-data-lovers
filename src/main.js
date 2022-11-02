import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);


const container = document.getElementById('container');
data.films.forEach(film =>{
    container.insertAdjacentHTML('beforeend', `<div class="cajitas">  <img class="posters" src="${film.poster}" width="157" height="202"></img><p class="titulos">${film.title}</p></div>`)
    });
        