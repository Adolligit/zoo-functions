const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  return species.reduce((acc, specie) => {
    // acc: {} <- location: [] <- specie.name: {} <- name.redents []
    const response = acc[`${specie.location}`]; // verificando existência do atributo.
    
    // if (!response) acc[`${specie.location}`] = []; // caso não exista o atributo, crie esta posição e adicione um array
    
    if (!options || (options.sex === 'female' && Object.keys(options).length < 2) || options.sorted) {
      acc[`${specie.location}`].push(specie.name);
    } else {
      const nameResidents = {};
      
      nameResidents[`${specie.name}`] = specie.residents.map((resident) => resident.name);
      acc[`${specie.location}`].push(nameResidents);
    }

    return acc;
  }, {});
}

console.log();
console.log(getAnimalMap({ sex: 'female', sorted: true }));
console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
