// import { example } from './data.js';
import { personajes, lugares, vehiculos, organizarAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

const allContainer = document.getElementById('allContainer');
const btn1 =document.getElementById("pelicula")
const btn2 = document.getElementById("personaje")
const btn3 = document.getElementById("locacion")
const btn4 = document.getElementById("vehiculo")
const filmHTMLarr = []
const peopleHTMLarr = []
const locationHTMLarr = []
const vehicleHTMLarr = []
const btnOrdenAZ = document.getElementById("peliculaAZ")

// <-----Inicio Vaciar contenedor principal-----
const cleanContainer = () => {
    allContainer.innerHTML = ''
}
// <-----Fin Vaciar contenedor principal-----

// <-----Inicio Buscar peliculas-----
// const buscador = document.querySelector('#buscador')
// const btnSearch = document.querySelector('#boton')

// const buscar = () => {
//     const texto = buscador
//     for(let film of data.films){
//         let titulo = film.title
//         console.log(titulo.value)
//         if(titulo.indexOf(texto) !== -1){
//             allContainer.innerHTML += `<div class="container" id="contenedor"> <div class="cajitasFrente">
//             <img class="posters" src="${film.poster}" width="157" height="202"></img>
//             <p class="titulos">${film.title}</p></div></div>`
//         }
//     }
// }
// btnSearch.addEventListener('click', buscar)
// buscador.addEventListener('keyup', buscar)


// <-----Fin Buscar peliculas-----


// <-----Inicio mostrar peliculas-----
data.films.forEach(film => {
    // organizarAZ()
    filmHTMLarr.push( `<div class="container" id="contenedor"> <div class="cajitasFrente">
    <img class="posters" src="${film.poster}" width="157" height="202"></img>
    <p class="titulos">${film.title}</p></div></div>`
)
})
<<<<<<< HEAD
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
// 
=======
btn1.addEventListener('click', () => {cleanContainer()
    allContainer.insertAdjacentHTML('beforeend', filmHTMLarr)})
// <-----Fin mostrar peliculas-----

// <-----Inicio mostrar personajes-----
personajes.forEach(persons => {
    persons.forEach(person => {
    peopleHTMLarr.push(`<div class="container" id="contenedor"> 
    <div class="cajitasFrente">
    <img class="posters" src="${person.img}" width="157" height="202"></img>
    <p class="titulos">${person.name}</p></div></div>`)
})})
btn2.addEventListener('click', ()=>{cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend',peopleHTMLarr)})
// <-----Fin mostrar personajes-----

// <-----Inicio mostrar lugares-----
lugares.forEach(locaciones => {
    locaciones.forEach(locacion =>{
    locationHTMLarr.push(`<div class="container" id="contenedor"> 
    <div class="cajitasFrente">
    <img class="posters" src="${locacion.img}" width="157" height="202"></img>
    <p class="titulos">${locacion.name}</p></div></div>`)
})})
btn3.addEventListener('click', ()=>{cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend',locationHTMLarr)})
// <-----Fin mostrar luares-----

// <-----Inicio mostrar vehiculos-----
vehiculos.forEach(vehicle => {
    vehicle.forEach(vehiculo => {
    vehicleHTMLarr.push(`<div class="container" id="contenedor"> 
    <div class="cajitasFrente">
    <img class="posters" src="${vehiculo.img}" width="157" height="202"></img>
    <p class="titulos">${vehiculo.name}</p></div></div>`)
})})
btn4.addEventListener('click', ()=>{cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend',vehicleHTMLarr)})
// <-----Fin mostrar vehiculos-----
>>>>>>> 44e3b5508baa0dcea6551d91758be17f2e334f29
