const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((object, specie) => {
      // código feio por causa do lint
      const lintFix = object;
      lintFix[specie.name] = specie.residents.length;
      return lintFix;
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
