const data = require('../data/zoo_data');

function justName(obj) {
  data.employees.find((item) => (item.firstName === obj.name) || item.lastName === obj.name);
}

function getEmployeesCoverage(obj) {
  if (obj.length === 1 && obj.name !== undefined) {
    return justName(obj);
  }
}

module.exports = getEmployeesCoverage;
