export const getMonsters = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=Monster_of_the_Week&perPage=20&page=${page}`)
    .then(res => res.json());
};

export const getMonster = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};
