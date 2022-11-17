import data from './data/ghibli/ghibli.js';
// estas funciones son de ejemplo

export const personajes = data.films.map(film => film.people)
export const lugares = data.films.map(film => film.locations)
export const vehiculos = data.films.map(film => film.vehicles)
export const peliculas = data.films

export const organizarAZ = (array, property) => {
    return array.flat().sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

export const organizarAZFilm = (array, property) => {
    return array.flat().sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
        })
    }

export const organizarZA = (array, property) => {
    return array.flat().sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
        });
    }

export const organizarZAFilm = (array, property) => {
    return array.flat().sort(function (a, b) {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
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