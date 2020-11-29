const { heroes } = require("../data/heroesInfo");

export const getHeroByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)) {
        throw new Error(`La editorial ${publisher} no es válida`)
    }
    
    return heroes.filter( hero => hero.publisher === publisher );
}

export const getHeroById = ( id ) => {
    return heroes.filter( hero => hero.id === id );
}

export const getHeroByName = (name = '') => {
    if(name === '') {
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));
}