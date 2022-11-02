// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/ghibli/ghibli.js';

// console.log(example, data);
// import user from "./data/ghibli/ghibli";

// const inicios = document.querySelector("cosa")

// const mostrarPeli = () => {
    // let peliculas=[]
    // for (let i=0;i<user.films.length; i++){
    //     peliculas.push(user.films[i].title)
    // }
    // console.log(peliculas)

//     const parraf = document.querySelector([`data-nombres`])
//     const cosa = document.createElement("p")
//     const contenido = `<p>${peliculas}</p>`;
//     cosa.innerHTML = contenido
//     parraf.appendChild(cosa)

// }

// const movieName = document.querySelector('nombres');

// const mostrar = user.films.forEach(peliculas =>{

    // const fichas = `
    //     <div>
    //     <h1>${peliculas.title}</h1>
    //     <p>${peliculas.director}</p>
    //     <button> Holis </button>
    //     </div>
    //     `;
//     movieName.insertAdjacentHTML('beforeend', fichas);
// });

// inicios.addEventListener("click", mostrar)

// const peliculas = data.films
// const personajes = peliculas.filter(({people: personaje}) => ({personaje}))
// peliculas.filter(({title: titulo}) => ({titulo}))
// const personajes =peliculas.forEach(personajes => personajes.people = )
// const tarjetas = document.getElementById('nombres');
// const peliculas = data.films
// peliculas.forEach(persona =>{
//     const personajes = persona.people
//     const fichas = `
//             <div>
//             <p>${personajes}</p>
//             <p>${personajes.age}</p>
//             <button> Holis </button>
//             </div>
//             `
//     tarjetas.insertAdjacentHTML('beforeEnd', fichas);
//     })
// user.films.forEach(peliculas =>{
//     const tarjet = document.querySelector("nombres")
//     const task = document.createElement('li')
//     const fichas = `
//         <div>
//         <p>${peliculas.title}</p>
//         <p>${peliculas.director}</p>
//         <button> Holis </button>
//         </div>
//         `
//     task.innerHTML = fichas
//     tarjet.appendChild(task)
// })

const container = document.getElementById('container');
data.films.forEach(pelicula => {
    container.insertAdjacentHTML('beforeend', `<p>${pelicula.title}<img src="${pelicula.poster}" width="157" height="202"></img></p>`)})
// data.films.forEach