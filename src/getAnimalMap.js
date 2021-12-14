const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options = {}) {
  const { sex, includeNames, sorted } = options;
  return species.reduce((acc, specie) => {
    // acc: {} <- location: [] <- specie.name: {} <- name.redents []
    if (!acc[`${specie.location}`]) acc[`${specie.location}`] = []; // line reduce [eslint]
    if (includeNames) {
      const animalNames = specie.residents.filter((resident) => {
        return (sex) ? sex === resident.sex : resident;
      }).map(({ name }) => name);
      acc[`${specie.location}`]
        .push({ [specie.name]: (sorted ? [...animalNames].sort() : [...animalNames]) });
    } else {
      acc[`${specie.location}`].push(specie.name);
    }
    return acc;
  }, {});
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
