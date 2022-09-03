const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [value, key] of Object.entries(person)) {
  console.log(`${value}: ${key}`);
}