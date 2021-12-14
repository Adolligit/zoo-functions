const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options = {}) {
  const { sex = ['female', 'male'], includeNames, sorted } = options;
  return species.reduce((acc, specie) => {
    if (!acc[`${specie.location}`]) acc[`${specie.location}`] = []; // line reduce [eslint]
    if (includeNames) {
      const animalNames = specie.residents
        .filter((resident) => sex[0].includes(resident.sex[0]))
        .map(({ name }) => name);
      acc[`${specie.location}`]
        .push({ [specie.name]: (sorted ? [...animalNames].sort() : [...animalNames]) });
    } else {
      acc[`${specie.location}`].push(specie.name);
    }
    return acc;
  }, {});
}

module.exports = getAnimalMap;
