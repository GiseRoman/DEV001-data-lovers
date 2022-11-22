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
  it('Ordena los personajes alfabeticamente de la A a la Z cuando son identicos', () => {
    const arrPeopleAZ0 = [
        {
          "name": "Catbus",
          "specie": "Cat"
        },
        {
          "name": "Catbus",
          "specie": "Cat"
        }
    ]
    const peopleAaZ2 =[
      {
        "name": "Catbus",
        "specie": "Cat"
      },
      {
        "name": "Catbus",
        "specie": "Cat"
      }
    ]
    const arr = organizarAZ(arrPeopleAZ0)
    expect(arr).toEqual(peopleAaZ2);
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
  it('Ordena los personajes alfabeticamente de la A a la Z cuando son identicos', () => {
    const arrpeopleZaA2 =[
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      },
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      }
    ]
    const peopleZaA2 =[
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      },
      {
        "name": "Yasuko Kusakabe",
        "specie": "Human"
      }
    ]
    const arr = organizarZA(arrpeopleZaA2)
    expect(arr).toEqual(peopleZaA2);
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
  it('Ordena las peliculas alfabeticamente de la A a la Z cuando son identicos', () => {
    const arrmovieAaZ0 =[
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      }
    ]
    const movieAaZ2 =[
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      },
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
      }
    ]
    const arr = organizarAZFilm(arrmovieAaZ0)
    expect(arr).toEqual(movieAaZ2);
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
  it('Ordena las peliculas alfabeticamente de la Z a la A cuando son identicos', () => {
    const arrmovieZaA2 =[
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }, 
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }
    ]
    const movieZaA2 =[
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }, 
      {
        "title": "Only Yesterday",
        "director": "Isao Takahata",
      }
    ]
    const arr = organizarZAFilm(arrmovieZaA2)
    expect(arr).toEqual(movieZaA2);
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
  it('Ordena los personajes por especie cuando son identicos', () => {
    const arrpeopleEspecie2 =[
      {
        "name": "Catbus",
        "specie": "Cat"
      },
      {
        "name": "Catbus",
        "specie": "Cat"
      }
    ]
    const peopleEspecie2 =[
      {
        "name": "Catbus",
        "specie": "Cat"
      },
      {
        "name": "Catbus",
        "specie": "Cat"
      }
    ]
    const arr = organizarEspecie(arrpeopleEspecie2)
    expect(arr).toEqual(peopleEspecie2);
  });
});
