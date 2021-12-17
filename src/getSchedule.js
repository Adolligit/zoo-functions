const data = require('../data/zoo_data');

const weekday = {
  Tuesday: {},
  Wednesday: {},
  Thursday: {},
  Friday: {},
  Saturday: {},
  Sunday: {},
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function creatingAttributesCalendar(species, day) {
  const hours = data.hours[day];

  return {
    officeHour: `Open from ${hours.open}am until ${hours.close}pm`,
    exhibition: species
      .filter((specie) => specie.availability.includes(day))
      .map((specie) => specie.name),
  };
}

function getAvailabilitySpecie(arraySpecies, specieName) {
  return arraySpecies.find((specie) => specie.name === specieName);
}

function getSchedule(scheduleTarget) {
  const hasSpecies = getAvailabilitySpecie(data.species, scheduleTarget);

  if (Object.keys(weekday).includes(scheduleTarget)) {
    return { [scheduleTarget]: weekday[scheduleTarget] };
  }

  if (!hasSpecies) {
    return Object.keys(weekday).reduce((acc, day) => {
      if (day !== 'Monday') acc[day] = creatingAttributesCalendar(data.species, day);
      return acc;
    }, weekday);
  }

  return hasSpecies.availability;
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
