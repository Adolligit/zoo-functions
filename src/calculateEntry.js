const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((object, people) => {
    const x = object; // fix lint

    if (people.age >= 50) x.senior += 1;
    else if (people.age >= 18) x.adult += 1;
    else x.child += 1;

    return x;
  }, { child: 0, adult: 0, senior: 0 });
}

function piceList(age) {
  if (age >= 50) return 24.99;
  if (age >= 18) return 49.99;
  return 20.99;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // espero refatorar esse código a seguir:
  return parseFloat(entrants.reduce((total, people) => total + piceList(people.age), 0).toFixed(2));
}

module.exports = { calculateEntry, countEntrants };
