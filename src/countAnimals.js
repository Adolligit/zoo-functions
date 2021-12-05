const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      // Lint da erro se o acumulador for um objeto e seu nome diferente de ACC
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  const { specie: specieName, sex } = animal;

  if (sex) {
    return data.species
      .find((specie) => specie.name === specieName)
      .residents.reduce((total, resident) => ((resident.sex === 'female') ? total + 1 : total), 0);
  }
  return data.species
    .find((specie) => specie.name === specieName).residents.length;
}
module.exports = countAnimals;
