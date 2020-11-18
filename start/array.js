const filterPeople = (people, filterFunc) => people.filter(filterFunc);

module.exports.findByName = (people, name) =>
  filterPeople(people, (person) => person.name === name);
module.exports.findByProfession = (people, profession) =>
  filterPeople(people, (person) => person.profession === profession);
module.exports.findByPet = (people, pet) =>
  filterPeople(people, (person) => person.pets.includes(pet));

module.exports.getFirstPet = (person) =>
  person.pets.length === 0 ? "none" : person.pets[0];
