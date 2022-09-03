const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'Simon';
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

// Cambiando person2 varierà anche person1 perchè
 // facciamo riferimento alle variabili che si trovano nella stessa memoria allocata