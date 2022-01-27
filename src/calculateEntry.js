const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((item) => {
    if (item.age < 18) {
      child += 1;
    } if (item.age >= 18 && item.age < 50) {
      adult += 1;
    } if (item.age >= 50) {
      senior += 1;
    }
  });
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const adultTotal = countEntrants(entrants).adult * data.prices.adult;
  const childTotal = countEntrants(entrants).child * data.prices.child;
  const seniorTotal = countEntrants(entrants).senior * data.prices.senior;

  return adultTotal + childTotal + seniorTotal;
}

module.exports = { calculateEntry, countEntrants };
