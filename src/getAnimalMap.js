const data = require('../data/zoo_data');

function animalNames(options) {
  return data.species.reduce((acc, cur) => {
    const { location, name, residents } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    const residentsNames = {};
    residentsNames[name] = residents.map((items) => items.name);
    acc[location].push(residentsNames);
    return acc;
  }, {});
}
function general(options) {
  return data.species.reduce((acc, cur) => {
    const { location, name } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});
}

function sortAnimalNames(options) {
  return data.species.reduce((acc, cur) => {
    const { location, name, residents } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    const residentsName = {};
    residentsName[name] = (residents.map((items) => items.name)).sort();
    acc[location].push(residentsName);
    return acc;
  }, {});
}

function sortWithSex(options) {
  return data.species.reduce((acc, cur) => {
    const { location, name, residents } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    const residentsName = {};
    residentsName[name] = residents.filter((item) =>
      item.sex === options.sex).map((items) => items.name).sort();
    acc[location].push(residentsName);
    return acc;
  }, {});
}

function includesWithSex(options) {
  return data.species.reduce((acc, cur) => {
    const { location, name, residents } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    const residentsName = {};
    residentsName[name] = residents.filter((item) =>
      item.sex === options.sex).map((items) => items.name);
    acc[location].push(residentsName);
    return acc;
  }, {});
}

function withSex(options) {
  if (options.sorted === true && options.sex) {
    return sortWithSex(options);
  } if (options.includeNames === true && options.sex) {
    return includesWithSex(options);
  }
}

function includesValidation(options) {
  if (options.includeNames === true && options.sorted === true) {
    return sortAnimalNames(options);
  } if (options.includeNames === true) {
    return animalNames(options);
  } if (options.includeNames === true) {
    return animalNames(options);
  }
}

function getAnimalMap(options) {
  if (options === undefined || !options.includeNames) {
    return general(options);
  } if (options.sex) {
    return withSex(options);
  }
  return includesValidation(options);
}

module.exports = getAnimalMap;
