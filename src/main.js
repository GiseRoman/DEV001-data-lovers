// / import { example } from './data.js';
import { personajes, lugares, vehiculos, organizarAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

const buscador = document.querySelector('#buscador')
const allContainer = document.getElementById('allContainer')
const btnSearch = document.querySelector('#boton')
const btn1 =document.getElementById("pelicula")
const btn2 = document.getElementById("personaje")
const btn3 = document.getElementById("locacion")
const btn4 = document.getElementById("vehiculo")
const filmHTMLarr = []
const peopleHTMLarr = []
const locationHTMLarr = []
const vehicleHTMLarr = []
let searchHTMLarr = []
const btnOrdenAZ = document.getElementById("peliculaAZ")
const descripcion = document.getElementById("descripcion")

descripcion.insertAdjacentHTML('beforeend', `<p> Studio Ghibli was founded by manga animator, director, producer, screenwriter, author, and artist Hayao Miyazaki; Japanese film director Isao Takahata; and producer Toshio Suzuki. Takahata and Miyazaki met in the 1960s when they were both working for the Japanese animation studio Tôei Dôga. Although they collaborated for more than a decade, it was not until the mid-1980s that they decided to start their own company. In 1985, with funding from publisher Tokuma Shoten, Takahata, Miyazaki, and Suzuki founded Studio Ghibli, a small production studio in suburban Tokyo.
</p>`)



// <-----Inicio Vaciar contenedor principal-----
const cleanContainer = () => {
    allContainer.innerHTML = ''
    descripcion.innerHTML = ''
}
// <-----Fin Vaciar contenedor principal-----

btnOrdenAZ.addEventListener('click', () => {
    const filterSelected = allContainer.getAttribute("filter")
    console.log(filterSelected)
    if(filterSelected === "characters"){
        const sortedCharacter = organizarAZ(personajes, "name")
        cleanContainer()
        sortedCharacter.forEach(character =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${character.img}" width="157" height="202"></img>
            <p class="titulos">${character.name}</p></div></div>`)
        })
    }else if(filterSelected === "locations"){
        const sortedLocation = organizarAZ(lugares, "name")
        cleanContainer()
        sortedLocation.forEach(location =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${location.img}" width="157" height="202"></img>
            <p class="titulos">${location.name}</p></div></div>`)
        })
    }else if(filterSelected === "vehicles"){
        const sortedVehicle = organizarAZ(lugares, "name")
        cleanContainer()
        sortedVehicle.forEach(vehicle =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${vehicle.img}" width="157" height="202"></img>
            <p class="titulos">${vehicle.name}</p></div></div>`)
        })}
})


const buscar = (e => {
    searchHTMLarr = []
    cleanContainer()
    const find = data.films.filter(film => film.title.toLowerCase().includes(buscador.value.toLowerCase()))
    find.forEach(encuentra => {
        searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
        <img class="posters" src="${encuentra.poster}" width="157" height="202"></img>
        <p class="titulos">${encuentra.title}</p></div></div>`)
    })
    personajes.forEach(peoples =>{
        const findPeop = peoples.filter(people => people.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findPeop.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <p class="titulos">${encuentra.name}</p></div></div>`)
        })
    })
    lugares.forEach(locations =>{
        const findLoc = locations.filter(location => location.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findLoc.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <p class="titulos">${encuentra.name}</p></div></div>`)
        })
    })
    vehiculos.forEach(vehicles =>{
        const findVehic = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findVehic.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <p class="titulos">${encuentra.name}</p></div></div>`)
        })
    })
})

buscador.addEventListener('keyup', buscar)
console.log(searchHTMLarr)
btnSearch.addEventListener('click',() => {cleanContainer()
    allContainer.insertAdjacentHTML('beforeend', searchHTMLarr)})

// <-----Fin Buscador-----


// <-----Inicio mostrar peliculas-----
data.films.forEach(film => {
    filmHTMLarr.push( `<div class="container" id="contenedor"> <div class="cajitasFrente">
    <img class="posters" src="${film.poster}" width="157" height="202"></img>
    <p class="titulos">${film.title}</p></div></div>`
)
})
btn1.addEventListener('click', () => {
    allContainer.setAttribute("filter", "movies")
    cleanContainer()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll">Peliculas de Studio Ghibli</div>`)
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
btn2.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "characters")
    cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Personajes de Studio Ghibli</div>`)
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
btn3.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "locations")
    cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Locaciones de Studio Ghibli</div>`)
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
btn4.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "vehicles")
    cleanContainer() 
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Vehiculos de Studio Ghibli</div>`)
    allContainer.insertAdjacentHTML('beforeend',vehicleHTMLarr)})
// <-----Fin mostrar vehiculos-----