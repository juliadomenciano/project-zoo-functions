const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.find((item) => item.name === animal);
  return animalData.residents.every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
