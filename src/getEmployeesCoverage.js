const data = require('../data/zoo_data');

const { employees, species } = data;

function searchEmployee(value) {
  if (value) {
    return [employees.find(({ id, firstName, lastName }) =>
      id === value.id
      || firstName === value.name
      || lastName === value.name)];
  }
  return employees.filter((e) => e);
}

function includeSpecies(array) {
  array.forEach((acc) => {
    const objSpecie = species.filter((specie) => acc.responsibleFor.includes(specie.id));
    acc.species = objSpecie.map((e) => e.name);
    acc.locations = objSpecie.map((e) => e.location);
  });
  return array;
}

function getEmployeesCoverage(param) {
  const filteredEmployees = searchEmployee(param);

  filteredEmployees.forEach((acc) => {
    acc.fullName = `${acc.firstName} ${acc.lastName}`;
  });

  const transformedEmployees = includeSpecies(filteredEmployees);

  transformedEmployees.forEach((e) => {
    delete e.firstName;
    delete e.lastName;
    delete e.managers;
    delete e.responsibleFor;
  });

  return (param) ? transformedEmployees[0] : transformedEmployees;
}

module.exports = getEmployeesCoverage;
