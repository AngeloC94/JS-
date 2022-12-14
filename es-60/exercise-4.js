const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

// const fetchPersonById = async(id) => {

// }

async function fetchPersonById (id) {
 return persons.find((person) => person.id === id);
}

async function fetchJobById (id) {
  return jobs.find((job) => job.id === id);
}

Promise.all([fetchPersonById(1), fetchJobById(2)]).then((result) => console.log(result));
