// import { example } from './data.js';
// import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

//<----------------Inicio Buscador--------------
document.addEventListener('keyup',e => {
    if(e.target.matches("#buscador")){
     document.querySelectorAll('.container').forEach(buscarTitulos=>{
        buscarTitulos.textContent.toLowerCase().includes(e.target.value)
         ?buscarTitulos.style.display = "flex"
         :buscarTitulos.style.display = "none"
     })
    }
   })
//<----------------Inicio Buscador--------------

//<----------------Ordenamiento--------------


//<----------------Ordenamiento--------------

//<----------------Inicio trabajar las tarjetas de data--------------
let moviesInit = document.getElementById("peliculas").parentElement
moviesInit.style.display = "none"
let peoplesInit = document.getElementById("personajes").parentElement
peoplesInit.style.display = "none"
let locationsInit = document.getElementById("locaciones").parentElement
locationsInit.style.display = "none"
let vehiclesInit = document.getElementById("vehiculos").parentElement
vehiclesInit.style.display = "none"
let descripcionInit = document.getElementById("descripcion")
descripcionInit.style.display = "flex"
let moviesOrden = document.getElementById("buttonsMovie")
moviesOrden.style.display = "none"
let characterOrden = document.getElementById("buttonsCharacter")
characterOrden.style.display = "none"
let locationOrden = document.getElementById("buttonsLocation")
locationOrden.style.display = "none"
let vehicleOrden = document.getElementById("buttonsVehicle")
vehicleOrden.style.display = "none"
let ghibliImagen = document.getElementById("ghibli")
let buscadorOculto = document.getElementById("containerBuscador")
buscadorOculto.style.display = "none"


//llamar a la data desde el boton Movie
const btn = document.getElementById("pelicula")
const btnPelis = () => {
    const pelisContainers = document.getElementById("peliculas").parentElement
    if(pelisContainers.style.display === "none"){
        pelisContainers.style.display = "flex"
        moviesOrden.style.display = "flex"
        buscadorOculto.style.display = "flex"
        characterOrden.style.display = "none"
        locationOrden.style.display = "none"
        vehicleOrden.style.display = "none"
        locationsInit.style.display = "none"
        vehiclesInit.style.display = "none"
        peoplesInit.style.display = "none"
        descripcionInit.style.display = "none"
        ghibliImagen.style.display = "none"
    }else{
        pelisContainers.style.display = "none"
    }
}
btn.addEventListener("click", btnPelis)

const movieContainer = document.getElementById('peliculas')

//mostrar data de peliculas
data.films.forEach(film =>{
    const peliculas = `<div class="container" id="contenedor"> <div class="cajitasFrente">
    <img class="posters" src="${film.poster}" width="157" height="202"></img>
    <p class="titulos">${film.title}</p></div></div>`
    // <div class="cajitasAtras"><p class="textos">${film.description}"</p>
    // <p class="textos">Director: ${film.director}</p>
    // <p class="textos">Producer: ${film.producer}</p>
    // <p class="textos"> Year: ${film.release_date}</p>
    // <p class="textos tarjetas">Score: ${film.rt_score}</p></div></div>
    movieContainer.insertAdjacentHTML('beforeend', peliculas)
    // console.log(document.querySelector("#contenedor"))
    });


//llamar a la data desde el boton Character
const btn2 = document.getElementById("personaje")
function btnPerson(){
    const peoplesContainers = document.getElementById("personajes").parentElement
    if(peoplesContainers.style.display === "none"){
        peoplesContainers.style.display = "flex"
        characterOrden.style.display = "flex"
        buscadorOculto.style.display = "flex"
        moviesOrden.style.display = "none"
        locationOrden.style.display = "none"
        vehicleOrden.style.display = "none"
        moviesInit.style.display = "none"
        locationsInit.style.display = "none"
        vehiclesInit.style.display = "none"
        descripcionInit.style.display = "none"
        moviesOrden.style.display = "none"
        ghibliImagen.style.display = "none"
    }else{
        peoplesContainers.style.display = "none"
    }
}
btn2.addEventListener("click", btnPerson)


//mostrar data de personajes
const peopleContainer = document.getElementById('personajes');
data.films.forEach(film => {
    const peoples = film.people
    peoples.forEach(personajes =>{
        const personaje = `<div class="container"><div class="cajitasFrente">
        <img class="posters" src="${personajes.img}" width="157" height="202"></img>
        <p class="titulos">${personajes.name}</p></div></div>`
        // <div class = "cajitasAtras">
        // <p class = "textos">Movie: ${film.title}</p>
        // <p class = "textos">Gender: ${personajes.gender}</p>
        // <p class = "textos">Age: ${personajes.age}</p>
        // <p class = "textos">Eye color: ${personajes.eye_color}</p>
        // <p class = "textos">Hair color: ${personajes.hair_color}</p>
        // <p class = "textos">Specie: ${personajes.specie}</p></div>
        peopleContainer.insertAdjacentHTML('beforeend', personaje)
    })
})

//llamar a la data desde el boton Locations
const btn3 = document.getElementById("locacion")
function btnLocacion(){
    const locationsContainers = document.getElementById("locaciones").parentElement
    if(locationsContainers.style.display === "none"){
        locationsContainers.style.display = "flex"
        locationOrden.style.display = "flex"
        buscadorOculto.style.display = "flex"
        moviesOrden.style.display = "none"
        characterOrden.style.display = "none"
        vehicleOrden.style.display = "none"
        moviesInit.style.display = "none"
        peoplesInit.style.display = "none"
        vehiclesInit.style.display = "none"
        descripcionInit.style.display = "none"
        moviesOrden.style.display = "none"
        ghibliImagen.style.display = "none"
    }else{
        locationsContainers.style.display = "none"
    }
}
btn3.addEventListener("click", btnLocacion)

//mostrar data de locaciones
const locationsContainer = document.getElementById('locaciones');
data.films.forEach(film =>{
    const location = film.locations
    location.forEach(locations =>{
        const locaciones = `<div class="container"><div class="cajitasFrente">
        <img class="posters" src="${locations.img}" width="157" height="202"></img>
        <p class="titulos">${locations.name}</p></div></div>`
        // <div class = "cajitasAtras">
        // <p class = "textos">Movie: ${film.title}</p>
        // <p class = "textos">Climate: ${locations.climate}</p>
        // <p class = "textos">Terrain: ${locations.terrain}</p>
        // <p class = "textos">Residents: ${locations.residents}</p>
        // <p class = "textos">Surface water: ${locations.surface_water}</p></div>
        locationsContainer.insertAdjacentHTML('beforeend', locaciones)
    })
})

//llamar a la data desde el boton Vehicles
const btn4 = document.getElementById("vehiculo")
function btnvehiculo(){
    const vehiclesContainers = document.getElementById("vehiculos").parentElement
    if(vehiclesContainers.style.display === "none"){
        vehiclesContainers.style.display = "flex"
        vehicleOrden.style.display = "flex"
        buscadorOculto.style.display = "flex"
        moviesOrden.style.display = "none"
        characterOrden.style.display = "none"
        locationOrden.style.display = "none"
        moviesInit.style.display = "none"
        locationsInit.style.display = "none"
        peoplesInit.style.display = "none"
        descripcionInit.style.display = "none"
        moviesOrden.style.display = "none"
        ghibliImagen.style.display = "none"
    }else{
        vehiclesContainer.style.display = "none"
    }
}
btn4.addEventListener("click", btnvehiculo)

//mostrar data de vehiculos
const vehiclesContainer = document.getElementById('vehiculos');
data.films.forEach(film =>{
    const vehiculos = film.vehicles
    vehiculos.forEach(vehicle =>{
        const vehicles = `<div class="container"><div class="cajitasFrente">
        <img class="posters" src="${vehicle.img}" width="157" height="202"></img>
        <p class="titulos">${vehicle.name}</p></div></div>`
        // <div class = "cajitasAtras">
        // <p class = "textos">Movie: ${film.title}</p>
        // <p class = "textos">Description: ${vehicle.description}</p>
        // <p class = "textos">Class: ${vehicle.vehicle_class}</p>
        // <p class = "textos">Lenght: ${vehicle.length}</p>
        // <p class = "textos">Pilot: ${vehicle.pilot.name}</p></div>
        vehiclesContainer.insertAdjacentHTML('beforeend', vehicles)
    })
})

//<----------------Fin trabajar las tarjetas de data--------------

