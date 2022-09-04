const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((item) => {
      obj[`${item.name}`] = item.residents.length;
    });
    return obj;
  } if (animal.sex === undefined) {
    return data.species.find((item) => item.name === animal.specie).residents.length;
  }
  return data.species.find((item) =>
    item.name === animal.specie).residents.filter((item) => item.sex === animal.sex).length;
}

module.exports = countAnimals;
