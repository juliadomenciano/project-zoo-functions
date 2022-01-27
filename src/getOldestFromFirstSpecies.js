const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((item) => item.id === id).responsibleFor[0];

  const getAnimals = species.filter((animals) => animals.id === employee);
  const sortAnimals = getAnimals[0].residents.sort((a, b) => b.age - a.age)[0];
  return [sortAnimals.name, sortAnimals.sex, sortAnimals.age];
}

module.exports = getOldestFromFirstSpecies;
