type Person = {
  name: string;
  profession: string;
  pets: string[];
};

type PersonFilterFunc = (person: Person) => boolean;

const filterPeople = (people: Person[], filterFunc: PersonFilterFunc) =>
  people.filter(filterFunc);

export const findByName = (people: Person[], name: string) =>
  filterPeople(people, (person) => person.name === name);
export const findByProfession = (people: Person[], profession: string) =>
  filterPeople(people, (person) => person.profession === profession);
export const findByPet = (people: Person[], pet: string) =>
  filterPeople(people, (person) => person.pets.includes(pet));

export const getFirstPet = (person: Person) => person.pets?.[0] ?? "none";
