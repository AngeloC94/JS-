// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if (role == 'ceo') { return ('2200'); }

  if (role == 'manager') { return ('1800'); }
  if (role == 'cto') { return ('1800'); }
  if (role == 'developer') { return ('1500'); }
  if (role == 'default') { return ('1000'); }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const defaultSalary = calculateSalary('default');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(defaultSalary);

calculateSalary();