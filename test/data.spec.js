import {organizarAZ, organizarAZFilm, organizarZA, organizarZAFilm, organizarEspecie } from '../src/data.js';

const filmsData = [
{
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
  },
{
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
},
{
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
},
{
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
},
{
    "title": "Only Yesterday",
    "director": "Isao Takahata",
}
]
const peopleData = [
  {
    "name": "Yasuko Kusakabe",
    "specie": "Human"
  },
  {
    "name": "Granny",
    "specie": "Human"
  },
  {
    "name": "Kanta Ogaki",
    "specie": "Human"
  },
  {
    "name": "Totoro",
    "specie": "Totoro"
  },
  {
    "name": "Chu Totoro",
    "specie": "Totoro"
  },
  {
    "name": "Chibi Totoro",
    "specie": "Totoro"
  },
  {
    "name": "Catbus",
    "specie": "Cat"
  }
]

describe('organizarAZ by name test', () => {
  it('Ordena los personajes alfabeticamente de la A a la Z', () => {
    const peopleAaZ =[
      {
        "name": "Catbus",
        "specie": "Cat"
      },
      {
        "name": "Chibi Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Chu Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Granny",
        "specie": "Human"
      },
      {
        "name": "Kanta Ogaki",
        "specie": "Human"
      },
      {
        "name": "Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      }
    ]
    const arr = organizarAZ(peopleData)
    expect(arr).toEqual(peopleAaZ);
  });
});

describe('organizarZA by name test', () => {
  it('Ordena los personajes alfabeticamente de la A a la Z', () => {
    const peopleZaA =[
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      },
      {
        "name": "Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Kanta Ogaki",
        "specie": "Human"
      },
      {
        "name": "Granny",
        "specie": "Human"
      },
      {
        "name": "Chu Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Chibi Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Catbus",
        "specie": "Cat"
      }
    ]
    const arr = organizarZA(peopleData)
    expect(arr).toEqual(peopleZaA);
  });
});

describe('organizarAZFilm by title test', () => {
  it('Ordena las peliculas alfabeticamente de la A a la Z', () => {
    const movieAaZ =[
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
      },
      {
        "title": "Kiki's Delivery Service",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }
    ]
    const arr = organizarAZFilm(filmsData)
    expect(arr).toEqual(movieAaZ);
  });
});

describe('organizarZAFilm by title test', () => {
  it('Ordena las peliculas alfabeticamente de la Z a la A', () => {
    const movieZaA =[
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }, 
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Kiki's Delivery Service",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
      },
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      }
    ]
    const arr = organizarZAFilm(filmsData)
    expect(arr).toEqual(movieZaA);
  });
});

describe('organizar por especie test', () => {
  it('Ordena los personajes por especie', () => {
    const peopleEspecie =[
      {
        "name": "Catbus",
        "specie": "Cat"
      },
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      },
      {
        "name": "Granny",
        "specie": "Human"
      },
      {
        "name": "Kanta Ogaki",
        "specie": "Human"
      },
      {
        "name": "Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Chu Totoro",
        "specie": "Totoro"
      },
      {
        "name": "Chibi Totoro",
        "specie": "Totoro"
      }
    ]
    const arr = organizarEspecie(peopleData)
    expect(arr).toEqual(peopleEspecie);
  });
});
