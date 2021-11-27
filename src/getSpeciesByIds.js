const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if(ids.length == 0) return []

  return data.species.filter(specie => ids.find(id => specie.id === id))
}

module.exports = getSpeciesByIds;


// let x = ["adelson", "adelson", "lima", "adelson"];

// console.log(x.find(e => e === "adelson"));