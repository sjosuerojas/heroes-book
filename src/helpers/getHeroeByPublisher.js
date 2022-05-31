import heroes from '../data/heroes';

const getHeroByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error('Heroe no existe en la lista');
  }

  return heroes.filter(((hero) => hero.publisher === publisher));
};

export default getHeroByPublisher;
