const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (const entries of Object.keys(person)) {
  console.log(entries, person[entries]);
}

// for (let entries in person){
//   console.log(entries, person[entries]);
// }


// Print values of person using Object.keys