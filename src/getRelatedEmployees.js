const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const managers = employees.some((item) => item.managers.some((elements) => elements === id));

  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const arr = [];
    employees.forEach((item) => {
      item.managers.forEach((items) => {
        if (items === managerId) {
          arr.push(`${item.firstName} ${item.lastName}`);
        }
      });
    });
    return arr;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
