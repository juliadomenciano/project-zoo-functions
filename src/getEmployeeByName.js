const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((item) =>
    item.firstName === employeeName || item.lastName === employeeName);
}

module.exports = getEmployeeByName;
