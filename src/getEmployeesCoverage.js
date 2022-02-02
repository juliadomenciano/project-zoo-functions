const data = require('../data/zoo_data');

const { employees, species } = data;

const getAnimalNames = (findEmployee) => {
  const animalArr = [];
  const responsability = findEmployee.responsibleFor;
  responsability.forEach((item) => {
    species.forEach((animal) => {
      if (animal.id === item) {
        return animalArr.push(animal.name);
      }
    });
  });
  return animalArr;
};

const getLocation = (findEmployee) => {
  const locationArr = [];
  getAnimalNames(findEmployee).forEach((item) => {
    species.forEach((locat) => {
      if (locat.name === item) {
        locationArr.push(locat.location);
      }
    });
  });
  return locationArr;
};

function justName(obj) {
  const info = {};
  const findEmployee = employees.find((item) =>
    (item.firstName === obj.name) || item.lastName === obj.name);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  info.id = findEmployee.id;
  info.fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  info.species = getAnimalNames(findEmployee);
  info.locations = getLocation(findEmployee);
  return info;
}

function byId(obj) {
  const info = {};
  const findEmployee = employees.find((item) =>
    (item.id === obj.id || item.id === obj));
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  info.id = findEmployee.id;
  info.fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  info.species = getAnimalNames(findEmployee);
  info.locations = getLocation(findEmployee);
  return info;
}

function allEmployees() {
  const employesIds = employees.map((item) => item.id);
  const employeesArr = [];
  employesIds.forEach((employeeId) => employeesArr.push(byId(employeeId)));
  return employeesArr;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return allEmployees();
  } if (obj.id !== undefined) {
    return byId(obj);
  } if (obj.name !== undefined || obj.id !== undefined) {
    return justName(obj);
  }
}

module.exports = getEmployeesCoverage;
