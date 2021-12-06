const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  if (!options) {
    return species.reduce((acc, specie) => {
      const response = acc[`${specie.location}`];

      if (response) {
        acc[`${specie.location}`].push(specie.name);
      } else {
        acc[`${specie.location}`] = [specie.name];
      }
      return acc;
    }, {});
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
