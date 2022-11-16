import data from './data/ghibli/ghibli.js';
// estas funciones son de ejemplo

export const personajes = data.films.map(film => film.people)
export const lugares = data.films.map(film => film.locations)
export const vehiculos = data.films.map(film => film.vehicles)

export const organizarAZ = () => {
    data.films.sort((a,b) => {
        return (a.title.toLowerCase() < b.title.toLowerCase()) ? -1
        : (a.title.toLowerCase() > b.title.toLowerCase()) ? 1
        : 0
    })
}

// export const anotherExample = () => {
//   return 'OMG';
// };

// export const modal = ()=>{
//     location.onclick = ()=>{
//         modalLocations.style.display = "block"
//     }
//     window.onclick = (event) => {
//         if (event.target == modalLocations){
//             modalLocations.style.display = "none"
//         }
//     }
// }