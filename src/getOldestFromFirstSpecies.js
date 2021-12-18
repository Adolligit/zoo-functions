const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const older = species
    .find((specie) => specie.id === firstSpecie)
    .residents.reduce((acc, resident) => ((acc.age > resident.age) ? acc : resident));

  return Object.values(older);
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
