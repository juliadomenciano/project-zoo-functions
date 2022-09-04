const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter((element) => element.id === ids[0] || element.id === ids[1]);
}

module.exports = getSpeciesByIds;
