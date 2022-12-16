// / import { example } from './data.js';
import { personajes, lugares, vehiculos, peliculas, organizarAZ, organizarAZFilm, organizarZA, organizarZAFilm, organizarEspecie } from './data.js';
import data from './data/ghibli/ghibli.js';

const buscador = document.querySelector('#buscador')
const descripcion = document.getElementById("descripcion")
const allContainer = document.getElementById('allContainer')
const btnSearch = document.querySelector('#boton')
const btn1 =document.getElementById("pelicula")
const btn2 = document.getElementById("personaje")
const btn3 = document.getElementById("locacion")
const btn4 = document.getElementById("vehiculo")
const btnOrdenAZ = document.getElementById("ordenAZ")
const btnOrdenZA = document.getElementById("ordenZA")
const btnOrdenEspecie = document.getElementById("ordenEspecie")
const filmHTMLarr = []
const peopleHTMLarr = []
const locationHTMLarr = []
const vehicleHTMLarr = []
let searchHTMLarr = []

// <-----Mostrar/ocultar introduccion-----
descripcion.insertAdjacentHTML('beforeend', `<p> Studio Ghibli was founded by manga animator, director, producer, screenwriter, author, and artist Hayao Miyazaki; Japanese film director Isao Takahata; and producer Toshio Suzuki. Takahata and Miyazaki met in the 1960s when they were both working for the Japanese animation studio Tôei Dôga. Although they collaborated for more than a decade, it was not until the mid-1980s that they decided to start their own company. In 1985, with funding from publisher Tokuma Shoten, Takahata, Miyazaki, and Suzuki founded Studio Ghibli, a production studio in suburban Tokyo.
</p>`)

// <-----Mostrar botones de ordenamiento-----
// Botones orden AZ-ZA
const mostrarBtnAZZA = () =>{
    btnOrdenAZ.style.display = "block"
    btnOrdenZA.style.display = "block"
}

const ocultarBtnAZZA = () =>{
    btnOrdenAZ.style.display = "none"
    btnOrdenZA.style.display = "none"
}
// Botones orden Especie
const mostrarBtnEspecie = () => {
    btnOrdenEspecie.style.display = "block"
}
const ocultarBtnEspecie = () => {
    btnOrdenEspecie.style.display = "none"
}

// <-----Vaciar contenedores-----
const cleanContainer = () => {
    allContainer.innerHTML = ''
    descripcion.innerHTML = ''
}
const cleanSearch = () => {
    buscador.value = ''
}

// <-----Buscador-----
const buscar = () => {
    searchHTMLarr = []
    cleanContainer()
    ocultarBtnAZZA()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Search</div>`)
    const find = data.films.filter(film => film.title.toLowerCase().includes(buscador.value.toLowerCase()))
    find.forEach(encuentra => {
        searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
        <p class="titulos">${encuentra.title}</p>
        <img class="posters" src="${encuentra.poster}" width="157" height="202"></img>
        <button class="botonModal" id="boton">Saber mas...</button>
        </div></div>`)
    })
    personajes.forEach(peoples =>{
        const findPeop = peoples.filter(people => people.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findPeop.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${encuentra.name}</p>
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    })
    lugares.forEach(locations =>{
        const findLoc = locations.filter(location => location.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findLoc.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${encuentra.name}</p>
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    })
    vehiculos.forEach(vehicles =>{
        const findVehic = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(buscador.value.toLowerCase()))
        findVehic.forEach(encuentra => {
            searchHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${encuentra.name}</p>
            <img class="posters" src="${encuentra.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    })
}
buscador.addEventListener('keyup', buscar)
btnSearch.addEventListener('click',() => {
    cleanContainer()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Search matches</div>`)
    allContainer.insertAdjacentHTML('beforeend', searchHTMLarr)
})

// <-----Mostrar peliculas-----
data.films.forEach(film => {
    filmHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
    <p class="titulos">${film.title}</p>
    <img class="posters" src="${film.poster}" width="157" height="202"></img>
    <button class="botonModal" id="boton">Saber mas...</button>
    </div></div>`)
})
btn1.addEventListener('click', () => {
    allContainer.setAttribute("filter", "movies")
    cleanContainer()
    cleanSearch()
    ocultarBtnEspecie()
    mostrarBtnAZZA()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll">Movies of Studio Ghibli</div>`)
    allContainer.insertAdjacentHTML('beforeend', filmHTMLarr)
})

// <-----Mostrar personajes-----
personajes.forEach(persons => {
    persons.forEach(person => {
    peopleHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
    <p class="titulos">${person.name}</p>
    <img class="posters" src="${person.img}" width="157" height="202"></img>
    <button class="botonModal" id="boton">Saber mas...</button>
    </div></div>`)
})
})
btn2.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "characters")
    cleanContainer() 
    cleanSearch()
    mostrarBtnAZZA()
    mostrarBtnEspecie()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Characters of Studio Ghibli</div>`)
    allContainer.insertAdjacentHTML('beforeend',peopleHTMLarr)
})


// <-----Mostrar lugares-----
lugares.forEach(locaciones => {
    locaciones.forEach(locacion =>{
    locationHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
    <p class="titulos">${locacion.name}</p>
    <img class="posters" src="${locacion.img}" width="157" height="202"></img>
    <button class="botonModal" id="boton">Saber mas...</button>
    </div></div>`)
})
})
btn3.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "locations")
    cleanContainer() 
    cleanSearch()
    ocultarBtnEspecie()
    mostrarBtnAZZA()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Locations of Studio Ghibli</div>`)
    allContainer.insertAdjacentHTML('beforeend',locationHTMLarr)
})

// <-----Mostrar vehiculos-----
vehiculos.forEach(vehicle => {
    vehicle.forEach(vehiculo => {
    vehicleHTMLarr.push(`<div class="container" id="contenedor"> <div class="cajitasFrente">
    <p class="titulos">${vehiculo.name}</p>
    <img class="posters" src="${vehiculo.img}" width="157" height="202"></img>
    <button class="botonModal" id="boton">Saber mas...</button>
    </div></div>`)
})
})
btn4.addEventListener('click', ()=>{
    allContainer.setAttribute("filter", "vehicles")
    cleanContainer() 
    cleanSearch()
    ocultarBtnEspecie()
    mostrarBtnAZZA()
    allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Vehicles of Studio Ghibli</div>`)
    allContainer.insertAdjacentHTML('beforeend',vehicleHTMLarr)
})

// <-----Ordenamientos-----
// Ordenamiento AZ characters, locations & vehicles
btnOrdenAZ.addEventListener('click', () => {
    const filterSelected = allContainer.getAttribute("filter")
    if(filterSelected === "characters"){
        const sortedCharacter = organizarAZ(personajes, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Characters of Studio Ghibli A-Z</div>`)
        sortedCharacter.forEach(character =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${character.name}</p>
            <img class="posters" src="${character.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }else if(filterSelected === "locations"){
        const sortedLocation = organizarAZ(lugares, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Locations of Studio Ghibli A-Z</div>`)
        sortedLocation.forEach(location =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${location.name}</p>
            <img class="posters" src="${location.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }else if(filterSelected === "vehicles"){
        const sortedVehicle = organizarAZ(vehiculos, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Vehicles of Studio Ghibli A-Z</div>`)
        sortedVehicle.forEach(vehicle =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${vehicle.name}</p>
            <img class="posters" src="${vehicle.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }
})

// Ordenamiento AZ Movie
btnOrdenAZ.addEventListener('click', () => {
    const filterSelectedMovie = allContainer.getAttribute("filter")
    if(filterSelectedMovie === "movies"){
        const sortedMovie = organizarAZFilm(peliculas, "title")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Movies of Studio Ghibli A-Z</div>`)
        sortedMovie.forEach(pelis =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${pelis.title}</p>
            <img class="posters" src="${pelis.poster}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }
})

// Ordenamiento ZA characters, locations & vehicles
btnOrdenZA.addEventListener('click', () => {
    const filterSelectedZA = allContainer.getAttribute("filter")
    if(filterSelectedZA === "characters"){
        const sortedCharacterZA = organizarZA(personajes, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Characters of Studio Ghibli Z-A</div>`)
        sortedCharacterZA.forEach(character =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${character.name}</p>
            <img class="posters" src="${character.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }else if(filterSelectedZA === "locations"){
        const sortedLocationZA = organizarZA(lugares, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Locations of Studio Ghibli Z-A</div>`)
        sortedLocationZA.forEach(location =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${location.name}</p>
            <img class="posters" src="${location.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }else if(filterSelectedZA === "vehicles"){
        const sortedVehicleZA = organizarZA(vehiculos, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Vehicles of Studio Ghibli Z-A</div>`)
        sortedVehicleZA.forEach(vehicle =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${vehicle.name}</p>
            <img class="posters" src="${vehicle.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }
})

// Ordenamiento ZA Movie
btnOrdenZA.addEventListener('click', () => {
    const filterSelectedMovieZA = allContainer.getAttribute("filter")
    if(filterSelectedMovieZA === "movies"){
        const sortedMovieZA = organizarZAFilm(peliculas, "title")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Movies of Studio Ghibli Z-A</div>`)
        sortedMovieZA.forEach(pelis =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">${pelis.title}</p>
            <img class="posters" src="${pelis.poster}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
    }
})

// Ordenamiento por Especie
btnOrdenEspecie.addEventListener('click', () => {
    const filterSelectedSpecie = allContainer.getAttribute("filter")
    if(filterSelectedSpecie === "characters"){
        const sortedCharacterSpecie = organizarEspecie(personajes, "name")
        cleanContainer()
        cleanSearch()
        allContainer.insertAdjacentHTML('beforeend', `<div class="titulosAll" >Characers of Studio Ghibli by species</div>`)
        sortedCharacterSpecie.forEach(character =>{ 
            allContainer.insertAdjacentHTML('beforeend', `<div class="container" id="contenedor"> <div class="cajitasFrente">
            <p class="titulos">Specie: ${character.specie} <br>Name: ${character.name}</p>
            <img class="posters" src="${character.img}" width="157" height="202"></img>
            <button class="botonModal" id="boton">Saber mas...</button>
            </div></div>`)
        })
        
    }
})

// <-----Gráficas-----
