import heroes from '../data/heroes';

const getHeroByName = (name = '') => {
  if (name.length !== 0) {
    return heroes.filter(((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase())));
  }

  return [];
};

export default getHeroByName;
