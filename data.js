import data from './data/ghibli/ghibli.js';
// estas funciones son de ejemplo

export const personajes = data.films.map(film => film.people)
export const lugares = data.films.map(film => film.locations)
export const vehiculos = data.films.map(film => film.vehicles)
export const peliculas = data.films
export const score = data.films.map(film => film.rt_score)

export const organizarAZ = (array) => {
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

export const organizarAZFilm = (array) => {
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

export const organizarZA = (array) => {
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

export const organizarZAFilm = (array) => {
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

export const organizarEspecie = (array) => {
    return array.flat().sort(function (a, b) {
        if (a.specie < b.specie) {
            return -1;
        }
        if (a.specie > b.specie) {
            return 1;
        }
        return 0;
        });
    }