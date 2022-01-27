/* const { hours } = require('../data/zoo_data'); */
const data = require('../data/zoo_data');

const { hours, species } = data;
const arr = Object.entries(hours).map(([key, value]) => ({ key, value }));
const daysOfTheWeek = Object.keys(hours);
const zooAnimals = species.map((item) => item.name);

function emptyparameter() {
  return arr.reduce((acc, curr) => {
    const { key, value } = curr;
    const { open, close } = value;
    const opened = `Open from ${open}am until ${close}pm`;
    const animals = species.filter((item) =>
      item.availability.includes(key)).map((animal) => animal.name);
    acc[key] = {
      officeHour: open !== 0 ? opened : 'CLOSED',
      exhibition: open !== 0 ? animals : 'The zoo will be closed!',

    };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return emptyparameter();
  } if (daysOfTheWeek.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: emptyparameter()[scheduleTarget],
    };
  } if (zooAnimals.includes(scheduleTarget)) {
    return species.find((item) => item.name === scheduleTarget).availability;
  }
  return emptyparameter();
}

module.exports = getSchedule;
